const responseObj = {
    hello: "Hey My name is Mabhukhado! How are you doing?",
    hey: "Hey! What's Up",
    date: new Date().toDateString(),
    today: new Date().toDateString(),
    time: new Date().toLocaleTimeString(),
};
// Fun and Casual

// Can you tell me a fun fact?
// What’s your favorite color?
// Do you have any hobbies?
// What’s the meaning of life?


// Entertainment and Leisure

// What are some good movies to watch?
// Can you recommend a book?
// What’s a popular song right now?
// What are some fun things to do this weekend?

// returning a promise
const fetchResponse = (userInput) => {
    return new Promise((res, reject) => {
        try{
            setTimeout(() => {
            res(responseObj[userInput]);
            }, 1200);
        } catch(error){
            reject(error);
        }
    });
};

const chatBotService = {
    getBotResponse(userInput){
        return fetchResponse(userInput);
    }
}; 

export default chatBotService;