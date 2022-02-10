const button = document.querySelector('#btn');
const input = document.querySelector('input[type="text"]');
const square = document.querySelector('#square');

const circle = square.querySelector('#circle');
const circleButton = circle.querySelector('#e_btn');

const rangeInput = document.querySelector('input[type="range"]');

// 1
button.addEventListener('click', () => {
    square.style.backgroundColor = input.value;
})

// 2
circleButton.style.display = 'none';

// 3
rangeInput.addEventListener('input', (event) => {
    circle.style.width = event.target.value + '%';
    circle.style.height = event.target.value + '%';
})