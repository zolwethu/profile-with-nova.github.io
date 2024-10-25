const responseObj = {
    hello: "Hey! How are you doing?",
    hey: "Hey! What's Up",
    date: new Date().toDateString(),
    today: new Date().toDateString(),
    time: new Date().toLocaleTimeString(),
};

const fetchResponse = (userInput) => {
    return responseObj[userInput];
};

const chatBotService = {
    getBotResponse(userInput){
        return fetchResponse(userInput);
    }
}; 

export default chatBotService;