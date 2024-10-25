const chatBody = document.querySelector(".chat-body");
const textInput = document.querySelector("#text-input");
const send = document.querySelector(".send");
const loadingEle = document.querySelector(".loading");

send.addEventListener("click", () => renderUserMessage());

// KEY PRESS ENTER TO SEND MESSAGE
textInput.addEventListener("keyup", (event) => {
    if (event.keyCode === 13) {
        renderUserMessage();
    }
});

// RENDER USER MESSAGES
const renderUserMessage = () => {
    const userInput = textInput.value;
    renderMessageEle(userInput, "user");
    textInput.value = "";

    toggleLoading(false);
    // DELAY CHATBOT RESPONSES WITH SETTIMEOUT
    setTimeout(() => {
        renderChatbotResponse(userInput);
        setScrollPosition();
        toggleLoading(true);
    }, 1200);
};

// RENDER CHATBOT RESPONSES 
const renderChatbotResponse = (userInput) =>{
    const res = getChatbotResponse(userInput);
    renderMessageEle(res);
};

const renderMessageEle = (txt, type) => {
    // DIFF CHAT BORDER STYLES FOR USER AND BOT
    let className = "user-message";
    if (type !== "user"){
        className = "chatbot-message";
    }
    const messageEle = document.createElement("div");
    const textNode = document.createTextNode(txt);
    messageEle.classList.add(className);
    messageEle.append(textNode);
    chatBody.append(messageEle);
};

// GETTING BOT RESPONSES, and if user input is empty
const getChatbotResponse = (userInput) => {
    return responseObj[userInput] == undefined ? "Please try something else" : responseObj[userInput];
};

// SET SCROLL POSITION
const setScrollPosition = () =>{
    if(chatBody.scrollHeight > 0){
        chatBody.scrollTop = chatBody.scrollHeight;
    }
}

// HIDE N SHOW LOADING ANIMATION
const toggleLoading = (show) => loadingEle.classList.toggle("hide", show);