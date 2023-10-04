function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const text = document.querySelector('.color');
const button = document.querySelector('.change-color');
button.addEventListener('click', handlerClick);
function handlerClick(evt) {
  const randomColor = getRandomHexColor();
  text.textContent = randomColor;
  console.log(randomColor);
  document.body.style.backgroundColor = randomColor;
};