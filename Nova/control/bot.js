import chatBotService from "./chatbot-services.js";

const chatBody = document.querySelector(".chat-body");
const textInput = document.querySelector("#text-input");
const send = document.querySelector(".send");
const loadingEle = document.querySelector(".loading");
const chatHeader = document.querySelector(".chat-header");
const container = document.querySelector(".bot-container");

// GET TIME 
function getTime(){
    let today = new Date();
    let hours = today.getHours();
    let minutes = today.getMinutes();

    if(hours < 10){
        hours = "0" + hours;
    }
    if(minutes < 10){
        minutes = "0" + minutes;
    }
    
    let time = hours + ":" + minutes;
    return time;
}

// Gets the first message
function firstBotMessage() {
    let firstMessage = "How's it going?"
    let time = getTime();
    $("#chat-timestamp").append(time);
}

firstBotMessage();

send.addEventListener("click", () => renderUserMessage());

// KEY PRESS ENTER TO SEND MESSAGE
textInput.addEventListener("keyup", (event) => {
    if (event.keyCode === 13) {
        renderUserMessage();
    }
});


// EXPAND AND COLLAPSE CHATBOT
chatHeader.addEventListener("click", () => {
    container.classList.toggle("collapse");
});

// RENDER USER MESSAGES
const renderUserMessage = () => {
    const userInput = textInput.value.trim(); // Trim whitespace
    if (!userInput) return; // Prevent rendering if input is empty

    renderMessageEle(userInput, "user");
    textInput.value = "";
    toggleLoading(false);
    renderChatbotResponse(userInput);
};

// RENDER CHATBOT RESPONSES 
const renderChatbotResponse = (userInput) => {
    const res = getChatbotResponse(userInput);
};

const renderMessageEle = (txt, type) => {
    // DIFF CHAT BORDER STYLES FOR USER AND BOT
    let className = "user-message";

    const messageEle = document.createElement("div");
    const textNode = document.createTextNode(txt);
    messageEle.classList.add(className);
    messageEle.append(textNode);
    if (type !== "user") {
        // IF IT IS A CHATBOT MESSAGE THEN ADD  BOT ICON
        className = "chatbot-message";
        messageEle.classList.add(className);
        const botResponseContainer = document.createElement("div");
        botResponseContainer.classList.add("bot-response-container");
        const botImage = document.createElement("img");
        botImage.setAttribute("src", "Nova/images/Nebula-profile/Nebula-Icon.2.png");
        botResponseContainer.append(botImage);
        botResponseContainer.append(messageEle);
        chatBody.append(botResponseContainer);
    } else {
        messageEle.classList.add(className);
        chatBody.append(messageEle);
    }

};

// GETTING BOT RESPONSES, and if user input is empty
const getChatbotResponse = (userInput) => {
    chatBotService.getBotResponse(userInput)
        .then((response) => {
            renderMessageEle(response);
            setScrollPosition();
            toggleLoading(true);
        })
        .catch((error) => {
            toggleLoading(true);
        });
};

// SET SCROLL POSITION
const setScrollPosition = () => {
    if (chatBody && chatBody.scrollHeight > 0) {
        chatBody.scrollTop = chatBody.scrollHeight;
    }
};
// HIDE N SHOW LOADING ANIMATION
const toggleLoading = (show) => loadingEle.classList.toggle("hide", show);

