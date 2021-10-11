const googleButton = document.getElementById("googleButton");
const loginForm = document.getElementById("loginForm");
const loginButton = document.getElementById("loginButton");

function submitForm() {
    console.log("Color: " + googleButton.style.background);
    if (googleButton.style.background == '#000000') {
        googleButton.style.background = '#FFFFFF'
    } else {
        googleButton.style.background = '#000000'
    }
}

loginForm.addEventListener('submit', submitForm);
loginButton.addEventListener('submit', submitForm);

googleButton.addEventListener('click', submitForm);