//button event
const hoverButton = document.getElementById('hoverButton');
const message = document.getElementById('message');

hoverButton.addEventListener('mouseover', () => {
    message.textContent = 'You are hovering over the button! bahahahah';
});

hoverButton.addEventListener('mouseout', () => {
    message.textContent = 'You have stopped hovering the button >:(';
});

//keyboard event
const keyboardInput = document.getElementById('keyboardInput');
const lastKey = document.getElementById('lastKey');

keyboardInput.addEventListener('keydown', (event) => {
    lastKey.textContent = event.key; 
});

//Form message
const form = document.getElementById('myForm');
const formMessage = document.getElementById('formMessage');

form.addEventListener('submit', (event) => {
    event.preventDefault();


    formMessage.textContent = "Form submitted successfully! Thank you.";
});

//Focus Event
const usernameInput = document.getElementById('username');

usernameInput.addEventListener('focus', () => {
    usernameInput.classList.add('focus');
});

usernameInput.addEventListener('blur', () => {
    usernameInput.classList.remove('focus');
});

