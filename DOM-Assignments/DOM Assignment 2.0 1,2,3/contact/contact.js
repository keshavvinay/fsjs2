let inputForm = document.querySelector('.mainRight form');
let outputForm = document.querySelector('.mainLeft form');
let userName = inputForm.querySelector('.userName').value;
let email = inputForm.querySelector('.userEmail').value;
let message = inputForm.querySelector('.userMessage').value;
inputForm.addEventListener('submit',(e) => {
    e.preventDefault();
    outputForm.querySelector('.enterName').value = userName;
    outputForm.querySelector('.enterMail').value = email;
    outputForm.querySelector('.enterMessage').value = message;
})