// ChapterLoader.js
export class ChapterLoader {
  constructor(messageRenderer, gameStateManager) {
    this.messageRenderer = messageRenderer;
    this.gameStateManager = gameStateManager;
    this.currentMessages = [];
    this.currentChoices = [];
    this.renderTimeouts = []; // Для хранения setTimeout
    this.isRendering = false; // Флаг рендера
  }

  // Очистка всех таймеров
  clearRenderTimeouts() {
    this.renderTimeouts.forEach(clearTimeout);
    this.renderTimeouts = [];
    this.isRendering = false;
    console.log('Все таймеры рендера очищены, блядина');
  }

  async loadChapter(chapterId, isRestart = false) {
    try {
      if (!chapterId) {
        console.warn('chapterId не указан, используется chapter1');
        chapterId = 'chapter1';
      }
      const arc = this.gameStateManager.gameState.arc || 1;
      const chapterPath = `/chapters/arc${arc}/${chapterId}.js`;
      console.log(`Попытка загрузки: ${chapterPath}`);
      const chapterModule = await import(chapterPath);
      const chapter = chapterModule.default;
      const messages = chapter.getText(this.gameStateManager.gameState);
      const choices = chapter.getChoices(this.gameStateManager.gameState);

      this.currentMessages = messages;
      this.currentChoices = choices;

      if (isRestart) {
        this.messageRenderer.clearChat();
        this.clearRenderTimeouts(); // Очищаем предыдущие таймеры
      }

      this.gameStateManager.gameState.currentChapter = chapterId;
      this.gameStateManager.saveProgress();

      await this.renderChapter(messages, choices);
    } catch (error) {
      console.error(`Ошибка загрузки главы ${chapterId}:`, error);
      this.messageRenderer.addMessage('system', 'Не удалось загрузить главу. Попробуйте начать новую игру.');
      this.gameStateManager.gameState.currentChapter = 'chapter1';
    }
  }

  async renderChapter(messages, choices) {
    if (this.isRendering) {
      this.clearRenderTimeouts(); // Останавливаем текущий рендер
    }
    this.isRendering = true;
    const currentLang = this.gameStateManager.gameState.language || 'ru';
    console.log(`Рендеринг главы, сообщений=${messages.length}`);

    for (let i = 0; i < messages.length; i++) {
      const message = messages[i];
      const text = typeof message.text === 'object' ? message.text[currentLang] || message.text.ru || '' : message.text || '';
      const description = typeof message.description === 'object' ? message.description[currentLang] || message.description.ru || '' : message.description || '';

      console.log(`Рендеринг сообщения ${i + 1}/${messages.length}: ${text}, задержка: ${message.delay || 1500}ms`);
      this.messageRenderer.addMessage(message.type, text, message.src, description);

      if (message.onAfter) {
        message.onAfter();
      }

      await new Promise(resolve => {
        const timeoutId = setTimeout(() => {
          resolve();
          this.renderTimeouts = this.renderTimeouts.filter(id => id !== timeoutId);
        }, message.delay || 1500);
        this.renderTimeouts.push(timeoutId);
      });

      if (!this.isRendering) {
        console.log('Рендер прерван');
        return;
      }

      if (message.showChoices || (choices.length > 0 && i === messages.length - 1)) {
        console.log('Прерываем цикл для показа выборов');
        break;
      }
    }

    if (choices.length > 0) {
      console.log('Рендерим варианты выбора');
      this.messageRenderer.renderChoices(choices);
    }

    requestAnimationFrame(() => {
      this.messageRenderer.chatContainer.scrollTop = this.messageRenderer.chatContainer.scrollHeight;
      console.log('Прокрутка выполнена');
    });
    this.isRendering = false;
  }

  updateLanguage() {
    this.messageRenderer.clearChat();
    this.clearRenderTimeouts(); // Очищаем текущий рендер
    console.log('Чат очищен для смены языка');
    const chapterId = this.gameStateManager.gameState.currentChapter || 'chapter1';
    console.log(`Смена языка: перезагружаем главу ${chapterId} с начала`);
    this.gameStateManager.saveProgress();
    this.loadChapter(chapterId, true);
  }

  restartChapter(gameState) {
    const chapterId = gameState.currentChapter || 'chapter1';
    console.log(`Перезапуск главы: ${chapterId}`);
    this.clearRenderTimeouts(); // Очищаем рендер при перезапуске
    this.loadChapter(chapterId, true);
  }
}