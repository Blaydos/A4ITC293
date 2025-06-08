// js/signup.js
function welcomeMessage() {
    alert("Welcome to the SolarNova Energy Ltd. - Newsletter Signup");
}

function validateForm() {
    const firstName = document.getElementById('firstName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();

    if (firstName === "") {
        alert("Please enter your first name");
        return false;
    }
    if (lastName === "") {
        alert("Please enter your last name");
        return false;
    }
    return true;
}