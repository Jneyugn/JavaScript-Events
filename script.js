//button event

const hoverButton = document.getElementById('hoverButton');
const message = document.getElementById('message');

hoverButton.addEventListener('mouseover', () => {
    message.textContent = 'You are hovering over the button! bahahahah';
});

hoverButton.addEventListener('mouseout', () => {
    message.textContent = 'You have stopped hovering the button >:(';
});