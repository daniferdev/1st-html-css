const ButtonRight = document.querySelector('.button-arrow.-right');
const ButtonLeft = document.querySelector('.button-arrow.-left');
const elements = document.querySelector('.elements');
let pixels = 10

ButtonRight.addEventListener('click', function() {
    pixels = pixels + 100;
    elements.style = `transform: translateX(${pixels}px)`;
});

ButtonLeft.addEventListener('click', function() {
    pixels = pixels - 100;
    elements.style = `transform: translateX(${pixels}px)`;
});
