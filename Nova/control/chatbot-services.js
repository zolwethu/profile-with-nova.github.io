const responseObj = {
    hello: "Hey! My name is Mabhukhado! How are you doing?",
    hey: "Hey! What's up?",
    date: new Date().toDateString(),
    today: new Date().toDateString(),
    time: new Date().toLocaleTimeString(),
    hi: "Hi there! How can I help you?",
    goodMorning: "Good morning! Hope you have a great day!",
    goodEvening: "Good evening! How was your day?",
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

            // Specific handling for user input
            if (normalizedInput.includes("how are you")) {
                botMessage = "I'm just a bot, but thanks for asking!";
            } else if (normalizedInput.includes("name")) {
                botMessage = "My name is Nebula, I don't think I want to know yours lol";
            } else if (normalizedInput.includes("education")) {
                botMessage = "Software Development Graduate, at Mangosuthu Uni Tech in 2022, with certifications in various fields.";
            }

            // More specific responses
            // GREETINGS
            if (userInput.toLowerCase().includes("hello")) {
                botMessage = "Ello, gov'nor! How may i be of help to you?"
            } else if (userInput.toLowerCase().includes("hi")) {
                botMessage = "oh hey there! How may I help?"
            } else if (userInput.toLowerCase().includes("hey")) {
                botMessage = "Hey howdy?! How may i be of help to you?"
            } else if (userInput.toLowerCase().includes("howdy")) {
                botMessage = "Howdy, partner! How may I help?"
            } else if (userInput.toLowerCase().includes("morning")) {
                botMessage = "Top of the mornin' to ya! How may I help?"
            } else if (userInput.toLowerCase().includes("what's up")) {
                botMessage = "What's crackin'? What can I do for you?"
            } else if (userInput.toLowerCase().includes("konnichiwa")) {
                botMessage = "What are you, a weeb? "
            }
            // HOW ARE YOU?
            else if (userInput.toLowerCase().includes("konnichiwa")) {
                botMessage = "Better now that you asked. What can I do for you?"
            } else if (userInput.toLowerCase().includes("how's everything")) {
                botMessage = "My lawyer says I don't have to answer that question. What can I do for you?"
            } else if (userInput.toLowerCase().includes("what's going on?")) {
                botMessage = "I've been going through some crests and troughs in my life. Is everything stable on your end?"
            } else if (userInput.toLowerCase().includes("what's new?")) {
                botMessage = "Armed and ready! What can I do for you?"
            } else if (userInput.toLowerCase().includes("what's up?")) {
                botMessage = "I was fine until you asked. What can I do for you?"
            }

            // Entertainment and Leisure
            else if (userInput.toLowerCase().includes("movie")) {
                botMessage = "Bullet train is the bomb, but he would go with Chris Hermsworth's Bullet train"
            } else if (userInput.toLowerCase().includes("song")) {
                botMessage = "Metro Booming's Like That with Future and Kendrick Lamar slaps!"
            } else if (userInput.toLowerCase().includes("music")) {
                botMessage = "Anything goes, from the lovely blues, jazz, pop, hippity pop, choral, opera."
            } else if (userInput.toLowerCase().includes("book")) {
                botMessage = "Last book he has read was 'HOW TO MAKE WOMEN HAPPY?', very informative. Had 2321 pages, all of em were empty"
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
                botMessage = "My name is Nebula, don't think I want to know yours tho lol"
            } else if (userInput.toLowerCase().includes("role")) {
                botMessage = "I am Sizolwethu's personal assistant"
            } else if (userInput.toLowerCase().includes("gender")) {
                botMessage = "I am a bot, but I can be whatever you want me to be(wink wink)"
            } else if (userInput.toLowerCase().includes("age")) {
                botMessage = "I been here since the begining of time, and will be here when humans inevitible destroy themselves in 2026"
            } else if (userInput.toLowerCase().includes("old")) {
                botMessage = "I been here since the begining of time, and will be here when humans inevitible destroy themselves in 2026"
            }
            // EDUCATION
            else if (userInput.toLowerCase().includes("education")) {
                botMessage = "Software Development Graduate, at Mangosuthu Uni Tech in 2022, and has certifications in Technical Introd to Cyber Security 1.0, 2.0, Practical Cloud Computing and Data Science using python"
            } else if (userInput.toLowerCase().includes("certification")) {
                botMessage = "Software Development Graduate, at Mangosuthu Uni Tech in 2022, and has certifications in Technical Introd to Cyber Security 1.0, 2.0, Practical Cloud Computing and Data Science using python"
            } else if (userInput.toLowerCase().includes("skill")) {
                botMessage = "Innovative mindset, problem solving ability flexible approach andability to adapt and Open to receiving feedbackfor continuous personal growth"
            } else if (userInput.toLowerCase().includes("knowledge")) {
                botMessage = "Innovative mindset, problem solving ability flexible approach andability to adapt and Open to receiving feedbackfor continuous personal growth"
            } else if (userInput.toLowerCase().includes("mentors")) {
                botMessage = "Mr Bethel Mutanga, played a huge role in developing my leadership abilities, goal setting, career and personal development, confidence and self-awareness"
            } else if (userInput.toLowerCase().includes("challenge")) {
                botMessage = "I had no debugging strategies, working with uncleaned code and most importantly not backing up code."
            } else if (userInput.toLowerCase().includes("approach")) {
                botMessage = ""
            } else if (userInput.toLowerCase().includes("continue")) {
                botMessage = "Find a mentor, Build on tech fundamentals and Developing my soft skills more"
            }
            else if (userInput.toLowerCase().includes("growth")) {
                botMessage = "Find a mentor, Build on tech fundamentals and Developing my soft skills more"
            } else if (userInput.toLowerCase().includes("extracurricular")) {
                botMessage = "Music is my go-to, I want to learn playing all guitars and a piano, n I enjoy PES 21 with latest mods"
            }
            else if (userInput.toLowerCase().includes("activities")) {
                botMessage = "Music is my go-to, I want to learn playing all guitars and a piano, n I enjoy PES 21 with latest mods"
            }
            // CAREER/ EXPERIENCE
            else if (userInput.toLowerCase().includes("passion")) {
                botMessage = "I want to join open-source projects. Work together with others to make and improve software that anyone can use and learning continuously"
            } else if (userInput.toLowerCase().includes("values")) {
                botMessage = "behavior and structure, ensuring that both thsse values remain high."
            } else if (userInput.toLowerCase().includes("superpower")) {
                botMessage = "Wait, are there any drawbacks?"
            }
            //   
            else if (userInput.toLowerCase().includes("Yes")) {
                botMessage = "I'm going with flight. I think I would really enjoy knowing I would have the ability to go almost anywhere. Also, I would love to see the world from a new perspective."
            } else if (userInput.toLowerCase().includes("Yes")) {
                botMessage = "Well then it's telekinesis, which could combine the advantages of strength and flight."
            } else if (userInput.toLowerCase().includes("influence")) {
                botMessage = ""
            } else if (userInput.toLowerCase().includes("interest")) {
                botMessage = "I find good design satisfying"
            } else if (userInput.toLowerCase().includes("dream")) {
                botMessage = "I have set a goal to master a new language or technology stack within the next year."
            } else if (userInput.toLowerCase().includes("story")) {
                botMessage = "I come from humble beginnings, I know the importance of consistent learning, the value of feedback"
            } else if (userInput.toLowerCase().includes("experience")) {
                botMessage = ""
            }
            // HUMAN PERSONALITY
            else if (userInput.toLowerCase().includes("inspire")) {
                botMessage = "The love of coding. Coding is not just a job, but a craft, a hobby, and a way of expression. It's art! It's Mortzat!"
            } else if (userInput.toLowerCase().includes("inspiration")) {
                botMessage = "The love of coding. Coding is not just a job, but a craft, a hobby, and a way of expression. It's art! It's Mortzat!"
            } else if (userInput.toLowerCase().includes("strength")) {
                botMessage = "I am curious and open-minded, motivation is nothing i'm short of bcoz I know where Im at, n where I want to be"
            } else if (userInput.toLowerCase().includes("project")) {
                botMessage = "Thers's a Deep Learning project I was once working on, with object detection and neural networks"
            } else if (userInput.toLowerCase().includes("impact")) {
                botMessage = "I strive to desrupt traditional industries, driving innovation, and challenging established business models. "
            } else if (userInput.toLowerCase().includes("short-term")) {
                botMessage = "Being better everyday at something, learning a new word, doing that extra pushups"
            } else if (userInput.toLowerCase().includes("medium-term")) {
                botMessage = "Find a mentor, Build on tech fundamentals and Developing my soft skills more"
            } else if (userInput.toLowerCase().includes("goal")) {
                botMessage = "My everyday goal is to be better at something than I was the day before, learning a new word, doing that extra pushups"
            } else if (userInput.toLowerCase().includes("experience")) {
                botMessage = ""


                // GOODBYES
            } else if (userInput.toLowerCase().includes("bye")) {
                botMessage = "See ya!"
            } else if (userInput.toLowerCase().includes("goodbye")) {
                botMessage = "See you around"
            } else if (userInput.toLowerCase().includes("thank")) {
                botMessage = "No THANK YOU! Don’t be a stranger."

            } else if (userInput.toLowerCase().includes("Ciao")) {
                botMessage = "Sayonara"

            } else if (userInput.toLowerCase().includes("take")) {
                botMessage = "Oh thanks love, have a good one!"

            } else if (userInput.toLowerCase().includes("farewell")) {
                botMessage = "Speak to you then."
            } else if (userInput.toLowerCase().includes("later")) {
                botMessage = "Take it sleazy!"

            } else if (userInput.toLowerCase().includes("see")) {
                botMessage = "See ya, wouldn´t wanna be ya!"

            } else if (userInput.toLowerCase().includes("cheer")) {
                botMessage = "Oh cheers love!"

            } else if (userInput.toLowerCase().includes("xoxo")) {
                botMessage = "oh I like this one! Bye naughty"

            } else {
                botMessage = "What would you like to know about Sibusiso? Please choose ";
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
