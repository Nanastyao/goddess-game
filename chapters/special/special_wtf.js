export default {
    getText(gameState) {
	const texts = gameState.language === 'en' ? {
        	msg1: "Lol, just a vibe check, silly! Wanted to sneak a peek at my man’s goods over latte! 😜",
		msg12: "Nah, for real, what’s the deal?",
		msg20: "Okay, I’ll drop it. Have fun at the café.",
		msg34: "Fuck this, I’m done. Don’t talk to me tonight.",
        } : {
        	msg1: "Ха, просто прикол, глупый! Захотела глянуть на богатство своего парня за латте! 😜",
		msg2: "Нет, серьёзно, в чём дело?",
		msg3: "Ладно, проехали. Веселись в кафе.",
		msg4: "Пиздец, всё, отвали. Не пиши мне сегодня."

        };

        return [
            {
                type: "received",
                text: texts.msg1,
                delay: 1000,
                showChoices: true
            }
        ];
    },

    getChoices(gameState) 
	const text = this.getText(gameState);{        
	return [
            {
                id: "really",
                text: texts.choice1,
		delay:1500,
                nextChapter: "special_really"
	    },
		{
                id: "really",
                text: texts.choice1,
		delay:1500,
                nextChapter: "special_really"
	    },
	{
                id: "really",
                text: texts.choice1,
		delay:1500,
                nextChapter: "special_really"
	    }

                ];
            },
}
