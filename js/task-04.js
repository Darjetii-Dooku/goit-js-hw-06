const minButton = document.querySelector('[data-action="decrement"]');
const plusButton = document.querySelector('[data-action="increment"]');
const counterValueElem = document.querySelector('#value');
let counterValue = 0;
function handlerClick() {
    counterValueElem.textContent = counterValue;
}
minButton.addEventListener('click', minFunc);
function minFunc() {
    counterValue -= 1;
    handlerClick();
}
plusButton.addEventListener('click', plusFunc);
function plusFunc() {
    counterValue += 1;
    handlerClick();
}
