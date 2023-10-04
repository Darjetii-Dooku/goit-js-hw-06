const input = document.querySelector('#font-size-control');
const magicText = document.querySelector('#text');
input.addEventListener('input', (event) => {
    magicText.style.fontSize = input.value+"px"; 
    console.dir(input.value)
})