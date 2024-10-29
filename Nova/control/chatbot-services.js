// const responseObj = {
//     hello: "Hey My name is Mabhukhado! How are you doing?",
//     hey: "Hey! What's Up",
//     date: new Date().toDateString(),
//     today: new Date().toDateString(),
//     time: new Date().toLocaleTimeString(),
//     hi: "Hi there! How can I help you?",
//     goodMorning: "Good morning! Hope you have a great day!",
//     goodEvening: "Good evening! How was your day?",
// };
/*
// returning a promise
const fetchResponse = (userInput) => {
    // GREETINGS
    if (userInput.toLowerCase().includes("hello")) {
        botMessage = "Ello, gov'nor! How may i be of help to you?"
    } else if (userInput.toLowerCase().includes("hey")) {
        botMessage = "Hey howdy?! How may i be of help to you?"
    } else if (userInput.toLowerCase().includes("howdy")) {
        botMessage = "Howdy, partner!"
    } else if (userInput.toLowerCase().includes("morning")) {
        botMessage = "Top of the mornin' to ya!"
    } else if (userInput.toLowerCase().includes("what's up")) {
        botMessage = "What's crackin'?"
    } else if (userInput.toLowerCase().includes("How are you doing?")) {
        botMessage = "What are you, a weeb?"
    }
    // HOW ARE YOU?
    else if (userInput.toLowerCase().includes("Konnichiwa")) {
        botMessage = "Better now that you asked."
    } else if (userInput.toLowerCase().includes("How's everything?")) {
        botMessage = "My lawyer says I don't have to answer that question."
    } else if (userInput.toLowerCase().includes("What's going on?")) {
        botMessage = "I've been going through some crests and troughs in my life. Is everything stable on your end?"
    } else if (userInput.toLowerCase().includes("What's new?")) {
        botMessage = "Armed and ready!"
    } else if (userInput.toLowerCase().includes("What's UP?")) {
        botMessage = "I was fine until you asked."
    }

    // Entertainment and Leisure
    else if (userInput.toLowerCase().includes("movies")) {
        botMessage = "Bullet train is the bomb, but he would go with Chris Hermsworth's Bullet train"
    } else if (userInput.toLowerCase().includes("book")) {
        botMessage = "Last book he has read was 'HOW TO MAKE WOMEN HAPPY?', very informative. Had 2321 pages, all of em were empty "
    } else if (userInput.toLowerCase().includes("weekend")) {
        botMessage = "He watches football games, always goes to bed crying because of Manchester United lol"
    } else if (userInput.toLowerCase().includes("fun")) {
        botMessage = "Oh lots of movies and series, specially anime. So psyched for Arcane season 2"
    }
    // Fun and Casual
    else if (userInput.toLowerCase().includes("fact")) {
        botMessage = "Dolphins name each other, but the craziest is your brain hides your nose, you can’t see it very well because your brain ignores it through a process called Unconscious Selective Attention."
    } else if (userInput.toLowerCase().includes("color")) {
        botMessage = "What am I? A girl? Grey I guess"
    } else if (userInput.toLowerCase().includes("hobbies")) {
        botMessage = "PES 21 is the bomb, especially with the best mods "
    } else if (userInput.toLowerCase().includes("life")) {
        botMessage = "I know where, I want to be. "
    }

    //CHATBOT PERSONALITY
    else if (userInput.toLowerCase().includes("name")) {
        botMessage = "My name is Nebula, I don't think I want to know yours lol"
    } else if (userInput.toLowerCase().includes("role")) {
        botMessage = "I am Sizolwethu's personal assistant"
    } else if (userInput.toLowerCase().includes("gender")) {
        botMessage = "I am a bot, but I can be whatever you want me to be(wink wink)"
    } else if (userInput.toLowerCase().includes("age")) {
        botMessage = "I been here since the begining of time, and will be here when humans inevitible destroy themselves in 2026"
    }
    // EDUCATION
    else if (userInput.toLowerCase().includes("education" || "certification")) {
        botMessage = "Software Development Graduate, at Mangosuthu Uni Tech in 2022, and has certifications in Technical Introd to Cyber Security 1.0, 2.0, Practical Cloud Computing and Data Science using python"
    }else if (userInput.toLowerCase().includes("skill" || "knowledge")) {
        botMessage = ""
    }else if (userInput.toLowerCase().includes("mentors")) {
        botMessage = ""
    }else if (userInput.toLowerCase().includes("challenge")) {
        botMessage = ""
    }else if (userInput.toLowerCase().includes("approach")) {
        botMessage = ""
    }else if (userInput.toLowerCase().includes("continue" || "growth")) {
        botMessage = ""
    }else if (userInput.toLowerCase().includes("extracurricular" || "activities")) {
        botMessage = ""
    }
    // CAREER/ EXPERIENCE
    else if (userInput.toLowerCase().includes("passion")) {
        botMessage = ""
    }else if (userInput.toLowerCase().includes("values")) {
        botMessage = ""
    }else if (userInput.toLowerCase().includes("superpower")) {
        botMessage = ""
    }else if (userInput.toLowerCase().includes("challenge")) {
        botMessage = ""
    }else if (userInput.toLowerCase().includes("influence")) {
        botMessage = ""
    }else if (userInput.toLowerCase().includes("interest")) {
        botMessage = ""
    }else if (userInput.toLowerCase().includes("dream")) {
        botMessage = ""
    }else if (userInput.toLowerCase().includes("story")) {
        botMessage = ""
    }else if (userInput.toLowerCase().includes("experience")) {
        botMessage = ""
    }
    // HUMAN PERSONALITY
    else if (userInput.toLowerCase().includes("inspire" || "inspiration")) {
        botMessage = ""
    }else if (userInput.toLowerCase().includes("strength")) {
        botMessage = ""
    }else if (userInput.toLowerCase().includes("project")) {
        botMessage = ""
    }else if (userInput.toLowerCase().includes("impact")) {
        botMessage = ""
    }else if (userInput.toLowerCase().includes("short-term" || "long-term" || "goal")) {
        botMessage = ""
    }else if (userInput.toLowerCase().includes("experience")) {
        botMessage = ""
    } else {
        botMessage = "What would you like to know about Sibusiso?";
    }
    let responseObj = botMessage;
     

    return new Promise((res, reject) => {
        try {
            setTimeout(() => {
                res(responseObj[userInput]);
            }, 1200);
        } catch (error) {
            reject(error);
        }
    });
};

const chatBotService = {
    getBotResponse(userInput) {
        return fetchResponse(userInput);
    }
};

export default chatBotService;

 function getBotResponse(userMessage) {
    let botMessage;
    
    // Simple responses based on user input
    if (userMessage.toLowerCase().includes("hello")) {
        botMessage = "Hi there! How can I help you?";
    } else if (userMessage.toLowerCase().includes("how are you")) {
        botMessage = "I'm just a bot, but thanks for asking!";
    } else {
        botMessage = "Sorry, I didn't understand that.";
    }
    
    displayMessage(botMessage, "bot");
}
     */


const responseObj = {
    hello: "Hey! My name is Mabhukhado! How are you doing?",
    hey: "Hey! What's up?",
    date: new Date().toDateString(),
    today: new Date().toDateString(),
    time: new Date().toLocaleTimeString(),
    hi: "Hi there! How can I help you?",
    goodMorning: "Good morning! Hope you have a great day!",
    goodEvening: "Good evening! How was your day?",
    // Add more responses here...
};

const fetchResponse = (userInput) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const normalizedInput = userInput.toLowerCase();
            let botMessage = "What would you like to know about Sibusiso?";

            // Check for direct matches or includes
            for (const key in responseObj) {
                if (normalizedInput.includes(key)) {
                    botMessage = responseObj[key];
                    break; // Exit loop on first match
                }
            }

            // Add specific handling for user input
            if (normalizedInput.includes("how are you")) {
                botMessage = "I'm just a bot, but thanks for asking!";
            } else if (normalizedInput.includes("name")) {
                botMessage = "My name is Nebula, I don't think I want to know yours lol";
            } else if (normalizedInput.includes("education")) {
                botMessage = "Software Development Graduate, at Mangosuthu Uni Tech in 2022, with certifications in various fields.";
            }

            // You can add more specific responses here...
            // GREETINGS
            if (userInput.toLowerCase().includes("hello")) {
                botMessage = "Ello, gov'nor! How may i be of help to you?"
            } else if (userInput.toLowerCase().includes("hey")) {
                botMessage = "Hey howdy?! How may i be of help to you?"
            } else if (userInput.toLowerCase().includes("howdy")) {
                botMessage = "Howdy, partner!"
            } else if (userInput.toLowerCase().includes("morning")) {
                botMessage = "Top of the mornin' to ya!"
            } else if (userInput.toLowerCase().includes("what's up")) {
                botMessage = "What's crackin'?"
            } else if (userInput.toLowerCase().includes("How are you doing?")) {
                botMessage = "What are you, a weeb?"
            }
            // HOW ARE YOU?
            else if (userInput.toLowerCase().includes("Konnichiwa")) {
                botMessage = "Better now that you asked."
            } else if (userInput.toLowerCase().includes("How's everything?")) {
                botMessage = "My lawyer says I don't have to answer that question."
            } else if (userInput.toLowerCase().includes("What's going on?")) {
                botMessage = "I've been going through some crests and troughs in my life. Is everything stable on your end?"
            } else if (userInput.toLowerCase().includes("What's new?")) {
                botMessage = "Armed and ready!"
            } else if (userInput.toLowerCase().includes("What's up?")) {
                botMessage = "I was fine until you asked."
            }

            // Entertainment and Leisure
            else if (userInput.toLowerCase().includes("movies")) {
                botMessage = "Bullet train is the bomb, but he would go with Chris Hermsworth's Bullet train"
            } else if (userInput.toLowerCase().includes("book")) {
                botMessage = "Last book he has read was 'HOW TO MAKE WOMEN HAPPY?', very informative. Had 2321 pages, all of em were empty "
            } else if (userInput.toLowerCase().includes("weekend")) {
                botMessage = "He watches football games, always goes to bed crying because of Manchester United lol"
            } else if (userInput.toLowerCase().includes("fun")) {
                botMessage = "Oh lots of movies and series, specially anime. So psyched for Arcane season 2"
            }
            // Fun and Casual
            else if (userInput.toLowerCase().includes("fact")) {
                botMessage = "Dolphins name each other, but the craziest is your brain hides your nose, you can’t see it very well because your brain ignores it through a process called Unconscious Selective Attention."
            } else if (userInput.toLowerCase().includes("color")) {
                botMessage = "What am I? A girl? Grey I guess"
            } else if (userInput.toLowerCase().includes("hobbies")) {
                botMessage = "PES 21 is the bomb, especially with the best mods "
            } else if (userInput.toLowerCase().includes("life")) {
                botMessage = "I know where, I want to be. "
            }

            //CHATBOT PERSONALITY
            else if (userInput.toLowerCase().includes("name")) {
                botMessage = "My name is Nebula, I don't think I want to know yours lol"
            } else if (userInput.toLowerCase().includes("role")) {
                botMessage = "I am Sizolwethu's personal assistant"
            } else if (userInput.toLowerCase().includes("gender")) {
                botMessage = "I am a bot, but I can be whatever you want me to be(wink wink)"
            } else if (userInput.toLowerCase().includes("age")) {
                botMessage = "I been here since the begining of time, and will be here when humans inevitible destroy themselves in 2026"
            }else if (userInput.toLowerCase().includes("old")) {
                botMessage = "I been here since the begining of time, and will be here when humans inevitible destroy themselves in 2026"
            }
            // EDUCATION
            else if (userInput.toLowerCase().includes("education" || "certification")) {
                botMessage = "Software Development Graduate, at Mangosuthu Uni Tech in 2022, and has certifications in Technical Introd to Cyber Security 1.0, 2.0, Practical Cloud Computing and Data Science using python"
            } else if (userInput.toLowerCase().includes("skill" || "knowledge")) {
                botMessage = ""
            } else if (userInput.toLowerCase().includes("mentors")) {
                botMessage = ""
            } else if (userInput.toLowerCase().includes("challenge")) {
                botMessage = ""
            } else if (userInput.toLowerCase().includes("approach")) {
                botMessage = ""
            } else if (userInput.toLowerCase().includes("continue" || "growth")) {
                botMessage = ""
            } else if (userInput.toLowerCase().includes("extracurricular" || "activities")) {
                botMessage = ""
            }
            // CAREER/ EXPERIENCE
            else if (userInput.toLowerCase().includes("passion")) {
                botMessage = ""
            } else if (userInput.toLowerCase().includes("values")) {
                botMessage = ""
            } else if (userInput.toLowerCase().includes("superpower")) {
                botMessage = ""
            } else if (userInput.toLowerCase().includes("challenge")) {
                botMessage = ""
            } else if (userInput.toLowerCase().includes("influence")) {
                botMessage = ""
            } else if (userInput.toLowerCase().includes("interest")) {
                botMessage = ""
            } else if (userInput.toLowerCase().includes("dream")) {
                botMessage = ""
            } else if (userInput.toLowerCase().includes("story")) {
                botMessage = ""
            } else if (userInput.toLowerCase().includes("experience")) {
                botMessage = ""
            }
            // HUMAN PERSONALITY
            else if (userInput.toLowerCase().includes("inspire" || "inspiration")) {
                botMessage = ""
            } else if (userInput.toLowerCase().includes("strength")) {
                botMessage = ""
            } else if (userInput.toLowerCase().includes("project")) {
                botMessage = ""
            } else if (userInput.toLowerCase().includes("impact")) {
                botMessage = ""
            } else if (userInput.toLowerCase().includes("short-term" || "long-term" || "goal")) {
                botMessage = ""
            } else if (userInput.toLowerCase().includes("experience")) {
                botMessage = ""
            } else {
                botMessage = "What would you like to know about Sibusiso?";
            }

            resolve(botMessage);
        }, 1200);
    });
};

const chatBotService = {
    getBotResponse(userInput) {
        return fetchResponse(userInput);
    }
};

export default chatBotService;
