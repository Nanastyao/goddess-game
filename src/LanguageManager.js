export class LanguageManager {
  constructor(gameStateManager, chapterLoader, screenManager) {
    this.gameStateManager = gameStateManager;
    this.chapterLoader = chapterLoader;
    this.screenManager = screenManager;
    this.currentLang = this.gameStateManager.gameState.language || 'ru';
    this.translations = {
      ru: {
        'end-chapter': 'Конец первой главы',
        'thanks': 'Спасибо за игру!',
        'to-be-continued': 'Продолжение следует...',
        'new-chapter': 'Начать новую главу',
        'new-game': 'Начать новую игру',
        'continue-game': 'Продолжить игру',
        'restart-chapter': 'Начать главу заново',
        'change-lang': 'Поменять язык',
        'online': 'онлайн',
        'boostyText': 'Спасибо, что играете в мою игру! Я прилагаю все усилия для скорейшего продолжения истории! Вы можете поддержать меня на Boosty - это поможет в развитии проекта!',
        'boostyButton': 'Поддержать на Boosty',
        'boostyAdditionalText': 'Начать новую игру'
      },
      en: {
        'end-chapter': 'End of Chapter One',
        'thanks': 'Thanks for playing!',
        'to-be-continued': 'To be continued...',
        'new-chapter': 'Start New Chapter',
        'new-game': 'Start New Game',
        'continue-game': 'Continue Game',
        'restart-chapter': 'Restart Chapter',
        'change-lang': 'Change Language',
        'online': 'online',
        'boostyText': 'Thank you for playing my game! I\'m doing my best to continue the story as soon as possible! You can support me on Boosty - this will help in the development of the project!',
        'boostyButton': 'Support on Boosty',
        'boostyAdditionalText': 'Start new game'
      }
    };
        this.updateLanguageButton(); // Инициализируем кнопку при создании
        this.updateTexts(); // Инициализируем переводы при создании
  }

  toggleLanguage() {
    // Переключаем язык и синхронизируем с gameStateManager
    this.currentLang = this.currentLang === 'ru' ? 'en' : 'ru';
    this.gameStateManager.gameState.language = this.currentLang;
    console.log(`Язык переключен на: ${this.currentLang}`);

    // Обновляем UI
    this.updateTexts();
    this.chapterLoader.updateLanguage(); // Обновляем чат
    this.screenManager.updatePostsLanguage(); // Обновляем посты в PureGram
    this.updateLanguageButton(); // Обновляем кнопку смены языка
    this.gameStateManager.saveProgress();
  }

  updateLanguageButton() {
    const langButton = document.querySelector('.lang-btn');
    if (langButton) {
      // Показываем противоположный язык (RU -> EN, EN -> RU)
      langButton.textContent = this.currentLang === 'ru' ? 'EN' : 'RU';
      langButton.setAttribute('data-lang', this.currentLang === 'ru' ? 'en' : 'ru');
      langButton.title = this.translations[this.currentLang]['change-lang'] || 'Change Language';
      console.log(`Кнопка языка обновлена: text=${langButton.textContent}, data-lang=${langButton.getAttribute('data-lang')}`);
    } else {
      console.warn('Кнопка языка (.lang-btn) не найдена в DOM');
    }
  }

  updateTexts() {
    const elements = [
      { selector: '.continue-game-button', key: 'continue-game', property: 'textContent' },
      { selector: '.start-game-button', key: 'new-game', property: 'textContent' },
      { selector: '.endgame-content h2', key: 'end-chapter' },
      { selector: '.endgame-content p:nth-child(2)', key: 'thanks' },
      { selector: '.endgame-content p:nth-child(3)', key: 'to-be-continued' },
      { selector: '.start-new-chapter', key: 'new-chapter', property: 'textContent' },
      { selector: '.nav-btn--endGame', key: 'new-game', property: 'title' },
      { selector: '.start-chapter-over', key: 'restart-chapter', property: 'title' },
      { selector: '.lang-btn', key: 'change-lang', property: 'title' },
      { selector: '.online-status', key: 'online' },
      { selector: '.boosty-overlay-text', key: 'boostyText' },
      { selector: '.boosty-overlay-button', key: 'boostyButton' },
      { selector: '.boosty-overlay-additional-text', key: 'boostyAdditionalText' }
    ];

    elements.forEach(({ selector, key, property = 'textContent' }) => {
      // Обрабатываем все элементы, если их несколько
      const element = document.querySelectorAll(selector);
      if (element) {
        element[property] = this.translations[this.currentLang][key];
      } else {
        console.debug(`Элемент ${selector} не найден в DOM`);
      }
    });

    // Обновляем текст в чатах (Лина, Амина и т.д.)
    const chatList = document.querySelector('.chat-list');
    if (chatList) {
      Object.entries(this.gameStateManager.gameState.chats).forEach(([id, chat]) => {
        if (!chat.isActive) return;
        const chatItem = chatList.querySelector(`.chat-item[data-chat-id="${id}"]`);
        if (chatItem) {
          const nameElement = chatItem.querySelector('.chat-info h2');
          const onlineElement = chatItem.querySelectorAll('.online-status');
          if (nameElement) {
            nameElement.textContent = chat.name[this.currentLang] || chat.name.ru;
          }
          if (onlineElement) {
            onlineElement.textContent = this.translations[this.currentLang]['online'];
          }
        }
      });
    }
    // Обновляем статус онлайн в текущем чате
    const chatHeaderStatus = document.querySelector('.chat-header .online-status');
    if (chatHeaderStatus) {
      chatHeaderStatus.textContent = this.translations[this.currentLang]['online'];
    }
  }
}