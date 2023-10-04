const form = document.querySelector(".login-form");
form.addEventListener("submit", SubHandler)
function SubHandler(evt) {
    evt.preventDefault();
    const { email, password } = evt.currentTarget.elements;
    if (email.value === "" || password.value === "") {
        alert("All inputs must be filled")
    } else {
        const userData = {
            "email": email.value,
            "password": password.value,
        };
        console.log(userData);
    }
    evt.currentTarget.reset();
} 
