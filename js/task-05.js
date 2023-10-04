const input = document.querySelector('#name-input');
const output = document.querySelector('#name-output');
input.addEventListener('input', NameInput);
function NameInput() {
    const UserName = input.value;
        
    if (UserName === '') {
        output.textContent = "Anonymous"
    } else {
        output.textContent = UserName;
    }
    
}
