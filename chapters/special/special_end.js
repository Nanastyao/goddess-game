export default {
    getText(gameState) {
        const texts = gameState.language === 'en' ? {
            msg1: "The dream fades... You wake up feeling strange.",
            btn: "Return to reality"
        } : {
            msg1: "Сон рассеивается... Ты просыпаешься с необычным чувством.",
            btn: "Вернуться в реальность"
        };

        return [
            {
                type: "monolog-placeholder",
                content: texts.msg1,
                buttonText: texts.btn,
                nextChapter: "arc2_date_monolog" // Возврат к основной арке
            }
        ];
    }
}