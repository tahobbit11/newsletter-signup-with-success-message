// Buttons
const subscribeButton = document.getElementById("subscribe");
const thanksButton = document.querySelector(".dismiss");
// text
const invalidEmail = document.querySelector(".invalid-email");
const inputText = document.querySelector(".email-input");
//sections
const signUp = document.querySelector(".sign-up");
const successMessage = document.querySelector(".success-message");

subscribeButton.addEventListener("click", (e) => {
    let text = inputText.value
    if(text == ""){
        invalidEmail.style.display = "inline";
        inputText.style.border = "1px solid hsl(4, 100%, 67%)";
    } else if (!text.includes('@')){
        invalidEmail.style.display = "inline";
        inputText.style.border = "1px solid hsl(4, 100%, 67%)";
    } else {
        invalidEmail.style.display = "none";
        inputText.style.border = "1px solid lightgrey";
        signUp.style.display = "none";
        successMessage.style.display = "flex";
    }
});

thanksButton.addEventListener("click", (e) => {
    signUp.style.display = "flex";
    successMessage.style.display = "none";
});