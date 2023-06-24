# Frontend Mentor - Newsletter sign-up form with success message solution

This is a solution to the [Newsletter sign-up form with success message challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/newsletter-signup-form-with-success-message-3FC1AZbNrv). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)


## Overview

### The challenge

Users should be able to:

- Add their email and submit the form
- See a success message with their email after successfully submitting the form
- See form validation messages if:
  - The field is left empty
  - The email address is not formatted correctly
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![](./assets/images/Screenshot%202023-06-24%20105946.png)

### Links

- Solution URL: [https://www.frontendmentor.io/solutions/newslettersignupwithsuccessmessage-4FQqrn46-d](https://www.frontendmentor.io/solutions/newslettersignupwithsuccessmessage-4FQqrn46-d)
- Live Site URL: [https://tahobbit11.github.io/newsletter-signup-with-success-message/](https://tahobbit11.github.io/newsletter-signup-with-success-message/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- JavaScript

### What I learned

I learned how to check for different conditions before changing how different elements are displayed

To see how you can add code snippets, see below:

```html
<div class="email-subscribe">
            <div class="email-line">
              <h2>Email address</h2>
              <span class="invalid-email" style="display: none">Valid Email Required</span>
            </div>
            <input type="text" placeholder="email@company.com" class="email-input">
            <button id="subscribe">Subscribe to monthly listener</button>
          </div>
```
```css
    .content-wrapper {
      background-color: white;
      border-radius: 40px;
      margin-top: 220px;
      padding: 25px;
      justify-content: normal;
      align-items: normal;
      flex-direction: row-reverse;
    }
```
```js
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
```

### Continued development

I could add some animations for when the button is pressed. for example it shakes when the email is not valid or empty, or have it be a smooth transition for when it is correct.

## Author

- Frontend Mentor - [@tahobbit11](https://www.frontendmentor.io/profile/tahobbit11)

