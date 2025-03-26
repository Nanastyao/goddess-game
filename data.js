const GameData = {
    ru: {
        chapter1: {
            messages: [
                {
                    type: "received",
                    text: "Привет, сладкий! 💋 Посмотри мой новый пост в PureGram!",
                    delay: 1000
                },
                {
                    type: "sent",
                    text: "Привет! Уже бегу смотреть...",
                    delay: 2500
                },
                {
                    type: "received",
                    text: "Ну как? Особенно понравилось декольте? 😇",
                    delay: 4000
                },
                {
                    type: "received",
                    text: "Честно-честно, хочу твоё мнение! 💄",
                    delay: 5500
                },
            ],
            choices: [
                {
                    text: "Ого, а не слишком глубокое декольте?",
                    result: [
                        {
                            type: "received",
                            text: "Да ладно тебе! Пусть все завидуют моему стилю 💅",
                            delay: 1000
                        },
                        {
                            type: "received",
                            text: "Кстати, насчёт фотографа... Мне надо будет потом с тобой посоветоваться 😏",
                            delay: 2500
                        }
                    ],
                    nextChapter: "chapter2"
                },
                {
                    text: "Выглядишь прекрасно!",
                    result: [
                        {
                            type: "received",
                            text: "Ага, особенно декольте удалось 💋",
                            delay: 1000
                        },
                        {
                            type: "received",
                            text: "Кажется, фотограф бесстыдно засматривался туда... Но об этом позже 😈",
                            delay: 2500
                        }
                    ],
                    nextChapter: "chapter2"
                }
            ],
        },

        chapter2: {
            messages: [
                {
                    type: "received",
                    text: "Слушай, а ты не поверишь, что было на фотосессии! 📸",
                    delay: 1000
                },
                {
                    type: "sent",
                    text: "Что там случилось?",
                    delay: 2500
                },
                {
                    type: "received",
                    text: "Этот фотограф... Он постоянно просил меня «чуть развернуться», «показать профиль»...",
                    delay: 4000
                },
                {
                    type: "received",
                    text: "А потом предложил сделать несколько кадров в более... «свободной» позе 🙄",
                    delay: 5500
                },
            ],
            choices: [
                {
                    text: "Что значит «свободной»? Он что, приставал к тебе?",
                    result: [
                        {
                            type: "received",
                            text: "Ну, не то чтобы приставал... Но глазами раздевал точно! 👀",
                            delay: 1000
                        },
                        {
                            type: "received",
                            text: "Особенно когда я в коротком платье была. Всё на ноги пялился...",
                            delay: 2500
                        }
                    ],
                    nextChapter: "chapter3_jealous"
                },
                {
                    text: "Звучит как обычная работа фотографа. Он профессионал?",
                    result: [
                        {
                            type: "received",
                            text: "Да, вроде профи. Но знаешь, иногда мне кажется, что он слишком... увлекается процессом 📷",
                            delay: 1000
                        },
                        {
                            type: "received",
                            text: "Хотя фотки получились классные! Завтра покажу тебе остальные 😊",
                            delay: 2500
                        }
                    ],
                    nextChapter: "chapter3_neutral"
                }
            ],
        },

        chapter3_jealous: {
            messages: [
                {
                    type: "sent",
                    text: "Мне это не нравится. Может, стоит сменить фотографа?",
                    delay: 1000
                },
                {
                    type: "received",
                    text: "Ой, да ладно тебе! Он просто делает свою работу... по-своему 💁‍♀️",
                    delay: 2500
                },
                {
                    type: "received",
                    text: "К тому же, он предложил сделать мне скидку на следующую фотосессию...",
                    delay: 4000
                },
                {
                    type: "received",
                    text: "...если я приду в той же мини-юбке 🙈",
                    delay: 5500
                },
            ],
            choices: [
                {
                    text: "Это уже переходит все границы! Я пойду с тобой на следующую фотосессию.",
                    result: [
                        {
                            type: "received",
                            text: "Ого! Мой рыцарь в сияющих доспехах! 🛡️",
                            delay: 1000
                        },
                        {
                            type: "received",
                            text: "Если честно, мне будет спокойнее, если ты придёшь. Спасибо! ❤️",
                            delay: 2500
                        }
                    ],
                    nextChapter: "chapter4_protective"
                },
                {
                    text: "Тебе нравится его внимание, да?",
                    result: [
                        {
                            type: "received",
                            text: "Ревнуешь что ли? 😏",
                            delay: 1000
                        },
                        {
                            type: "received",
                            text: "Не переживай, он мне не интересен. Просто забавно наблюдать за его реакцией...",
                            delay: 2500
                        }
                    ],
                    nextChapter: "chapter4_jealous"
                }
            ],
        },

        chapter3_neutral: {
            messages: [
                {
                    type: "sent",
                    text: "Буду ждать! Уверен, фотографии получились отличные.",
                    delay: 1000
                },
                {
                    type: "received",
                    text: "Кстати, я думала о том, чтобы попробовать себя в роли модели. Как считаешь?",
                    delay: 2500
                },
                {
                    type: "received",
                    text: "У меня уже есть несколько предложений от небольших брендов одежды...",
                    delay: 4000
                },
                {
                    type: "received",
                    text: "Но я не уверена, стоит ли соглашаться 🤔",
                    delay: 5500
                },
            ],
            choices: [
                {
                    text: "Конечно стоит! У тебя отличные данные для модели.",
                    result: [
                        {
                            type: "received",
                            text: "Правда? Спасибо за поддержку! 🥰",
                            delay: 1000
                        },
                        {
                            type: "received",
                            text: "Тогда я, пожалуй, соглашусь на предложение от того бренда купальников...",
                            delay: 2500
                        }
                    ],
                    nextChapter: "chapter4_supportive"
                },
                {
                    text: "А учёба? У тебя же скоро экзамены...",
                    result: [
                        {
                            type: "received",
                            text: "Ты прав... Наверное, стоит сначала закончить семестр 📚",
                            delay: 1000
                        },
                        {
                            type: "received",
                            text: "Хотя... может, ты просто не хочешь, чтобы другие парни на меня смотрели? 😉",
                            delay: 2500
                        }
                    ],
                    nextChapter: "chapter4_concerned"
                }
            ],
        },

        chapter4_protective: {
            messages: [
                {
                    type: "sent",
                    text: "Когда следующая фотосессия? Я освобожу время.",
                    delay: 1000
                },
                {
                    type: "received",
                    text: "В эту субботу, в 14:00. Студия недалеко от университета.",
                    delay: 2500
                },
                {
                    type: "received",
                    text: "Кстати, ты не думал сам попробовать себя в качестве модели? У тебя хорошие данные! 📏",
                    delay: 4000
                },
            ],
            choices: [
                {
                    text: "Я? Нет, это не моё. Я лучше буду твоим телохранителем.",
                    result: [
                        {
                            type: "received",
                            text: "Мой персональный защитник! Как мило 🥰",
                            delay: 1000
                        },
                        {
                            type: "received",
                            text: "Знаешь, мне нравится, что ты так заботишься обо мне...",
                            delay: 2500
                        }
                    ],
                    nextChapter: "chapter5_protective"
                },
                {
                    text: "Может быть... А что, ты бы хотела увидеть меня в роли модели?",
                    result: [
                        {
                            type: "received",
                            text: "Ещё бы! Думаю, у тебя отлично получилось бы! 🤩",
                            delay: 1000
                        },
                        {
                            type: "received",
                            text: "Можем даже сделать совместную фотосессию... Что скажешь?",
                            delay: 2500
                        }
                    ],
                    nextChapter: "chapter5_joint"
                }
            ],
        },

        chapter4_jealous: {
            messages: [
                {
                    type: "sent",
                    text: "Я не ревную. Просто беспокоюсь о тебе.",
                    delay: 1000
                },
                {
                    type: "received",
                    text: "Ну-ну, конечно 😏 Твои уши краснеют даже через сообщения!",
                    delay: 2500
                },
                {
                    type: "received",
                    text: "Если хочешь знать, он пригласил меня на ужин после фотосессии...",
                    delay: 4000
                },
            ],
            choices: [
                {
                    text: "И ты согласилась?",
                    result: [
                        {
                            type: "received",
                            text: "А что, если да? 🤔",
                            delay: 1000
                        },
                        {
                            type: "received",
                            text: "Шучу! Конечно нет. Я сказала, что у меня уже есть планы.",
                            delay: 2500
                        }
                    ],
                    nextChapter: "chapter5_relief"
                },
                {
                    text: "Это твоё дело. Ты свободная девушка.",
                    result: [
                        {
                            type: "received",
                            text: "Ого! Какой ты... спокойный 😐",
                            delay: 1000
                        },
                        {
                            type: "received",
                            text: "Если тебе интересно, я отказалась. Сказала, что встречаюсь с другом из университета...",
                            delay: 2500
                        }
                    ],
                    nextChapter: "chapter5_cool"
                }
            ],
        },

        chapter4_supportive: {
            messages: [
                {
                    type: "sent",
                    text: "Купальники? Звучит интересно! Когда съёмка?",
                    delay: 1000
                },
                {
                    type: "received",
                    text: "На следующей неделе! Немного волнуюсь, если честно... 😅",
                    delay: 2500
                },
                {
                    type: "received",
                    text: "Там будет целая команда: визажисты, стилисты, фотографы...",
                    delay: 4000
                },
            ],
            choices: [
                {
                    text: "Ты справишься! Хочешь, я пойду с тобой для моральной поддержки?",
                    result: [
                        {
                            type: "received",
                            text: "Правда? Это было бы супер! 🙏",
                            delay: 1000
                        },
                        {
                            type: "received",
                            text: "Только обещай не смеяться, если я буду выглядеть нелепо!",
                            delay: 2500
                        }
                    ],
                    nextChapter: "chapter5_support"
                },
                {
                    text: "Уверен, ты будешь звездой этой фотосессии!",
                    result: [
                        {
                            type: "received",
                            text: "Спасибо за веру в меня! ❤️",
                            delay: 1000
                        },
                        {
                            type: "received",
                            text: "Кстати, они сказали, что можно привести друга. Не хочешь посмотреть, как это происходит?",
                            delay: 2500
                        }
                    ],
                    nextChapter: "chapter5_invite"
                }
            ],
        },

        chapter4_concerned: {
            messages: [
                {
                    type: "sent",
                    text: "Дело не в других парнях. Просто не хочу, чтобы учёба пострадала.",
                    delay: 1000
                },
                {
                    type: "received",
                    text: "Да-да, конечно! Я же вижу тебя насквозь 👀",
                    delay: 2500
                },
                {
                    type: "received",
                    text: "Но вообще ты прав. Сначала экзамены, потом всё остальное.",
                    delay: 4000
                },
                {
                    type: "received",
                    text: "Кстати о учёбе... Поможешь мне подготовиться к тесту по экономике?",
                    delay: 5500
                },
            ],
            choices: [
                {
                    text: "Конечно! Когда удобно встретиться?",
                    result: [
                        {
                            type: "received",
                            text: "Может, завтра вечером? У меня дома никого не будет... 😏",
                            delay: 1000
                        },
                        {
                            type: "received",
                            text: "Сможем спокойно позаниматься, без отвлечений!",
                            delay: 2500
                        }
                    ],
                    nextChapter: "chapter5_study"
                },
                {
                    text: "Давай в библиотеке? Там тихо и можно сосредоточиться.",
                    result: [
                        {
                            type: "received",
                            text: "В библиотеке? Серьёзно? 😒",
                            delay: 1000
                        },
                        {
                            type: "received",
                            text: "Ладно, пусть будет библиотека. Завтра в 16:00?",
                            delay: 2500
                        }
                    ],
                    nextChapter: "chapter5_library"
                }
            ],
        },

        chapter5_protective: {
            messages: [
                {
                    type: "received",
                    text: "Знаешь, я тут подумала... Может, нам стоит больше времени проводить вместе?",
                    delay: 1000
                },
                {
                    type: "sent",
                    text: "Что ты имеешь в виду?",
                    delay: 2500
                },
                {
                    type: "received",
                    text: "Ну, мы могли бы вместе готовиться к экзаменам, ходить в кино...",
                    delay: 4000
                },
                {
                    type: "received",
                    text: "...или просто гулять. Что скажешь? 🌃",
                    delay: 5500
                },
            ],
            choices: [
                {
                    text: "Звучит здорово! Я только за.",
                    result: [
                        {
                            type: "received",
                            text: "Отлично! Тогда завтра после пар идём в парк? 🌳",
                            delay: 1000
                        },
                        {
                            type: "received",
                            text: "Говорят, там открылось новое кафе с потрясающими десертами!",
                            delay: 2500
                        }
                    ],
                    nextChapter: "chapter6_date"
                },
                {
                    text: "А как же твои фотосессии и карьера модели?",
                    result: [
                        {
                            type: "received",
                            text: "Это просто хобби. Ты для меня важнее! 💕",
                            delay: 1000
                        },
                        {
                            type: "received",
                            text: "К тому же, с тобой мне всегда интересное, чем с этими напыщенными фотографами.",
                            delay: 2500
                        }
                    ],
                    nextChapter: "chapter6_priority"
                }
            ],
        },

        chapter5_joint: {
            messages: [
                {
                    type: "sent",
                    text: "Совместная фотосессия? Звучит интересно, но немного страшно...",
                    delay: 1000
                },
                {
                    type: "received",
                    text: "Не бойся! Я буду рядом и всё подскажу. К тому же, это будет весело! 🎭",
                    delay: 2500
                },
                {
                    type: "received",
                    text: "Представь, какие классные фотографии у нас будут! Можем даже сделать тематическую съёмку.",
                    delay: 4000
                },
            ],
            choices: [
                {
                    text: "Хорошо, я согласен. Но только ради тебя!",
                    result: [
                        {
                            type: "received",
                            text: "Ура! Ты лучший! 🎉",
                            delay: 1000
                        },
                        {
                            type: "received",
                            text: "Я уже представляю, как мы будем выглядеть. Это будет бомба!",
                            delay: 2500
                        }
                    ],
                    nextChapter: "chapter6_photoshoot"
                },
                {
                    text: "А какая тема фотосессии? Надеюсь, ничего слишком откровенного?",
                    result: [
                        {
                            type: "received",
                            text: "Ой, да ладно тебе! Я думала о чём-то стильном. Может, в стиле 90-х? 👖",
                            delay: 1000
                        },
                        {
                            type: "received",
                            text: "Хотя... если хочешь что-то более... интересное, я не против 😏",
                            delay: 2500
                        }
                    ],
                    nextChapter: "chapter6_theme"
                }
            ],
        },

        chapter5_relief: {
            messages: [
                {
                    type: "sent",
                    text: "Фух, я рад, что ты отказалась.",
                    delay: 1000
                },
                {
                    type: "received",
                    text: "Ага! Значит, всё-таки ревнуешь! Попался! 😂",
                    delay: 2500
                },
                {
                    type: "received",
                    text: "Если честно, он мне совсем не интересен. Слишком самовлюблённый.",
                    delay: 4000
                },
                {
                    type: "received",
                    text: "А вот ты... совсем другое дело 💫",
                    delay: 5500
                },
            ],
            choices: [
                {
                    text: "Что ты имеешь в виду?",
                    result: [
                        {
                            type: "received",
                            text: "Ну... ты умный, заботливый, и с тобой всегда интересно 🌟",
                            delay: 1000
                        },
                        {
                            type: "received",
                            text: "И да, ты очень милый, когда ревнуешь!",
                            delay: 2500
                        }
                    ],
                    nextChapter: "chapter6_compliment"
                },
                {
                    text: "Я не ревную, просто беспокоюсь о твоей безопасности.",
                    result: [
                        {
                            type: "received",
                            text: "Ну конечно! Продолжай себя в этом убеждать 😄",
                            delay: 1000
                        },
                        {
                            type: "received",
                            text: "Но знаешь... мне приятно твоё беспокойство. Правда ❤️",
                            delay: 2500
                        }
                    ],
                    nextChapter: "chapter6_denial"
                }
            ],
        },

        chapter5_cool: {
            messages: [
                {
                    type: "sent",
                    text: "Друг из университета? Это про меня?",
                    delay: 1000
                },
                {
                    type: "received",
                    text: "А ты догадливый! 😉 Конечно про тебя.",
                    delay: 2500
                },
                {
                    type: "received",
                    text: "Так что... получается, у нас с тобой свидание? Раз я уже сказала фотографу, что встречаюсь с тобой...",
                    delay: 4000
                },
            ],
            choices: [
                {
                    text: "Да, давай встретимся. Куда пойдём?",
                    result: [
                        {
                            type: "received",
                            text: "Ого! Не ожидала такой решительности! 😍",
                            delay: 1000
                        },
                        {
                            type: "received",
                            text: "Может, в тот новый ресторан на набережной? Говорят, там очень романтичная атмосфера...",
                            delay: 2500
                        }
                    ],
                    nextChapter: "chapter6_date_plan"
                },
                {
                    text: "Ты меня просто используешь как отговорку?",
                    result: [
                        {
                            type: "received",
                            text: "Ну вот, опять ты всё неправильно понял! 🙄",
                            delay: 1000
                        },
                        {
                            type: "received",
                            text: "Я действительно хотела бы провести с тобой время... Если ты, конечно, не против.",
                            delay: 2500
                        }
                    ],
                    nextChapter: "chapter6_misunderstanding"
                }
            ],
        },

        chapter6_date: {
            messages: [
                {
                    type: "received",
                    text: "Знаешь, сегодня был замечательный день. Спасибо тебе! ✨",
                    delay: 1000
                },
                {
                    type: "sent",
                    text: "Мне тоже очень понравилось. Давно так хорошо не проводил время.",
                    delay: 2500
                },
                {
                    type: "received",
                    text: "Уже поздно... Наверное, пора спать 😴",
                    delay: 4000
                },
            ],
            choices: [
                {
                    text: "Да, завтра рано вставать. Сладких снов!",
                    result: [
                        {
                            type: "received",
                            text: "И тебе сладких снов! Увидимся завтра в университете 💫",
                            delay: 1000
                        },
                        {
                            type: "received",
                            text: "Спокойной ночи ❤️",
                            delay: 2500
                        }
                    ],
                    nextChapter: "end"
                },
                {
                    text: "Не хочется заканчивать наш разговор...",
                    result: [
                        {
                            type: "received",
                            text: "Мне тоже... Но нам обоим нужно выспаться 🌙",
                            delay: 1000
                        },
                        {
                            type: "received",
                            text: "Завтра продолжим, обещаю! Спокойной ночи ❤️",
                            delay: 2500
                        }
                    ],
                    nextChapter: "end"
                }
            ],
        },

        chapter6_priority: {
            messages: [
                {
                    type: "received",
                    text: "Это просто хобби. Ты для меня важнее! 💕",
                    delay: 1000
                },
                {
                    type: "received",
                    text: "К тому же, с тобой мне всегда интереснее, чем с этими напыщенными фотографами.",
                    delay: 2500
                },
            ],
            choices: [
                {
                    text: "А как же твои фотосессии и карьера модели?",
                    result: [
                        {
                            type: "received",
                            text: "Это просто хобби. Ты для меня важнее! 💕",
                            delay: 1000
                        },
                        {
                            type: "received",
                            text: "К тому же, с тобой мне всегда интересное, чем с этими напыщенными фотографами.",
                            delay: 2500
                        }
                    ],
                    nextChapter: "chapter6_priority"
                },
            ],
        },

        chapter6_photoshoot: {
            messages: [
                {
                    type: "sent",
                    text: "Совместная фотосессия? Звучит интересно, но немного страшно...",
                    delay: 1000
                },
                {
                    type: "received",
                    text: "Не бойся! Я буду рядом и всё подскажу. К тому же, это будет весело! 🎭",
                    delay: 2500
                },
                {
                    type: "received",
                    text: "Представь, какие классные фотографии у нас будут! Можем даже сделать тематическую съёмку.",
                    delay: 4000
                },
            ],
            choices: [
                {
                    text: "Хорошо, я согласен. Но только ради тебя!",
                    result: [
                        {
                            type: "received",
                            text: "Ура! Ты лучший! 🎉",
                            delay: 1000
                        },
                        {
                            type: "received",
                            text: "Я уже представляю, как мы будем выглядеть. Это будет бомба!",
                            delay: 2500
                        }
                    ],
                    nextChapter: "chapter7_photoshoot"
                },
                {
                    text: "А какая тема фотосессии? Надеюсь, ничего слишком откровенного?",
                    result: [
                        {
                            type: "received",
                            text: "Ой, да ладно тебе! Я думала о чём-то стильном. Может, в стиле 90-х? 👖",
                            delay: 1000
                        },
                        {
                            type: "received",
                            text: "Хотя... если хочешь что-то более... интересное, я не против 😏",
                            delay: 2500
                        }
                    ],
                    nextChapter: "chapter7_theme"
                }
            ],
        },

        chapter7_photoshoot: {
            messages: [
                {
                    type: "received",
                    text: "Ура! Ты лучший! 🎉",
                    delay: 1000
                },
                {
                    type: "received",
                    text: "Я уже представляю, как мы будем выглядеть. Это будет бомба!",
                    delay: 2500
                },
            ],
            choices: [],
        },

        chapter7_theme: {
            messages: [
                {
                    type: "received",
                    text: "Ой, да ладно тебе! Я думала о чём-то стильном. Может, в стиле 90-х? 👖",
                    delay: 1000
                },
                {
                    type: "received",
                    text: "Хотя... если хочешь что-то более... интересное, я не против 😏",
                    delay: 2500
                },
            ],
            choices: [],
        },

        chapter8_photoshoot: {
            messages: [
                {
                    type: "received",
                    text: "Ура! Ты лучший! 🎉",
                    delay: 1000
                },
                {
                    type: "received",
                    text: "Я уже представляю, как мы будем выглядеть. Это будет бомба!",
                    delay: 2500
                },
            ],
            choices: [],
        },

        chapter8_theme: {
            messages: [
                {
                    type: "received",
                    text: "Ой, да ладно тебе! Я думала о чём-то стильном. Может, в стиле 90-х? 👖",
                    delay: 1000
                },
                {
                    type: "received",
                    text: "Хотя... если хочешь что-то более... интересное, я не против 😏",
                    delay: 2500
                },
            ],
            choices: [],
        },

        chapter9_photoshoot: {
            messages: [
                {
                    type: "received",
                    text: "Ура! Ты лучший! 🎉",
                    delay: 1000
                },
                {
                    type: "received",
                    text: "Я уже представляю, как мы будем выглядеть. Это будет бомба!",
                    delay: 2500
                },
            ],
            choices: [],
        },

        chapter9_theme: {
            messages: [
                {
                    type: "received",
                    text: "Ой, да ладно тебе! Я думала о чём-то стильном. Может, в стиле 90-х? 👖",
                    delay: 1000
                },
                {
                    type: "received",
                    text: "Хотя... если хочешь что-то более... интересное, я не против 😏",
                    delay: 2500
                },
            ],
            choices: [],
        },

        chapter10_photoshoot: {
            messages: [
                {
                    type: "received",
                    text: "Ура! Ты лучший! 🎉",
                    delay: 1000
                },
                {
                    type: "received",
                    text: "Я уже представляю, как мы будем выглядеть. Это будет бомба!",
                    delay: 2500
                },
            ],
            choices: [],
        },

        chapter10_theme: {
            messages: [
                {
                    type: "received",
                    text: "Ой, да ладно тебе! Я думала о чём-то стильном. Может, в стиле 90-х? 👖",
                    delay: 1000
                },
                {
                    type: "received",
                    text: "Хотя... если хочешь что-то более... интересное, я не против 😏",
                    delay: 2500
                },
            ],
            choices: [],
        },

        chapter11_photoshoot: {
            messages: [
                {
                    type: "received",
                    text: "Ура! Ты лучший! 🎉",
                    delay: 1000
                },
                {
                    type: "received",
                    text: "Я уже представляю, как мы будем выглядеть. Это будет бомба!",
                    delay: 2500
                },
            ],
            choices: [],
        },

        chapter11_theme: {
            messages: [
                {
                    type: "received",
                    text: "Ой, да ладно тебе! Я думала о чём-то стильном. Может, в стиле 90-х? 👖",
                    delay: 1000
                },
                {
                    type: "received",
                    text: "Хотя... если хочешь что-то более... интересное, я не против 😏",
                    delay: 2500
                },
            ],
            choices: [],
        },

        chapter12_photoshoot: {
            messages: [
                {
                    type: "received",
                    text: "Ура! Ты лучший! 🎉",
                    delay: 1000
                },
                {
                    type: "received",
                    text: "Я уже представляю, как мы будем выглядеть. Это будет бомба!",
                    delay: 2500
                },
            ],
            choices: [],
        },

        chapter12_theme: {
            messages: [
                {
                    type: "received",
                    text: "Ой, да ладно тебе! Я думала о чём-то стильном. Может, в стиле 90-х? 👖",
                    delay: 1000
                },
                {
                    type: "received",
                    text: "Хотя... если хочешь что-то более... интересное, я не против 😏",
                    delay: 2500
                },
            ],
            choices: [],
        },

        chapter13_photoshoot: {
            messages: [
                {
                    type: "received",
                    text: "Ура! Ты лучший! 🎉",
                    delay: 1000
                },
                {
                    type: "received",
                    text: "Я уже представляю, как мы будем выглядеть. Это будет бомба!",
                    delay: 2500
                },
            ],
            choices: [],
        },

        chapter13_theme: {
            messages: [
                {
                    type: "received",
                    text: "Ой, да ладно тебе! Я думала о чём-то стильном. Может, в стиле 90-х? 👖",
                    delay: 1000
                },
                {
                    type: "received",
                    text: "Хотя... если хочешь что-то более... интересное, я не против 😏",
                    delay: 2500
                },
            ],
            choices: [],
        },

        chapter14_photoshoot: {
            messages: [
                {
                    type: "received",
                    text: "Ура! Ты лучший! 🎉",
                    delay: 1000
                },
                {
                    type: "received",
                    text: "Я уже представляю, как мы будем выглядеть. Это будет бомба!",
                    delay: 2500
                },
            ],
            choices: [],
        },

        chapter14_theme: {
            messages: [
                {
                    type: "received",
                    text: "Ой, да ладно тебе! Я думала о чём-то стильном. Может, в стиле 90-х? 👖",
                    delay: 1000
                },
                {
                    type: "received",
                    text: "Хотя... если хочешь что-то более... интересное, я не против 😏",
                    delay: 2500
                },
            ],
            choices: [],
        },

        chapter15: {
            messages: [
                {
                    type: "received",
                    text: "Знаешь, сегодня был замечательный день. Спасибо тебе! ✨",
                    delay: 1000
                },
                {
                    type: "sent",
                    text: "Мне тоже очень понравилось. Давно так хорошо не проводил время.",
                    delay: 2500
                },
                {
                    type: "received",
                    text: "Уже поздно... Наверное, пора спать 😴",
                    delay: 4000
                },
            ],
            choices: [
                {
                    text: "Да, завтра рано вставать. Сладких снов!",
                    result: [
                        {
                            type: "received",
                            text: "И тебе сладких снов! Увидимся завтра в университете 💫",
                            delay: 1000
                        },
                    ],
                    nextChapter: "end"
                },
                {
                    text: "Не хочется заканчивать наш разговор...",
                    result: [
                        {
                            type: "received",
                            text: "Мне тоже... Но нам обоим нужно выспаться 🌙",
                            delay: 1000
                        },
                        {
                            type: "received",
                            text: "Завтра продолжим, обещаю!",
                            delay: 2500
                        }
                    ],
                    nextChapter: "end"
                }
            ],
        },

        end: {
            messages: [
                {
                    type: "sent",
                    text: "Спокойной ночи! До завтра!",
                    delay: 1000
                },
                {
                    type: "received",
                    text: "Спокойной ночи ❤️",
                    delay: 2500
                },
            ],
            choices: [],

            isLastChapter: true,
        },

        posts: [
            {
                img: "img/post1.jpg",
                text: "Новый смелый образ для блога ✨ #кожаннаякуртка #стиль #мода #блогер",
                likes: 234
            },
            {
                img: "img/post2.jpg",
                text: "Когда эксперимент удался 💄 #сексуальныйстиль #макияж #красота #фотосессия",
                likes: 587
            },
            {
                img: "img/post3.jpg",
                text: "Секрет идеальной фотосессии? Правильный ракурс... и не только 📸 #фотография #модель #фотосет #идеальныйкадр",
                likes: 891
            },
        ]
    }
};