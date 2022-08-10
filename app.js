const form = document.querySelector('#form')
const firstName = document.querySelector('#firstname');
const lastName = document.querySelector('#lastname');
const email = document.querySelector('#email');
const password = document.querySelector('#password');

function setErrorFor(input, msg) {
    const formControl = input.parentElement;
    const errorMsg = formControl.querySelector('.error-msg');
    errorMsg.innerText = msg;
    formControl.className = 'form-control error'
}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success'
}

function checkInputs(input, msg) {
    if (input.value === '') {
        setErrorFor(input, msg)
    } else {
        setSuccessFor(input);
    }
}

function validaetEmail(input) {
    const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (input.value.match(validRegex)) {
        setSuccessFor(input)
    } else {
        setErrorFor(input, 'looks like this is not an email')
    }
}
form.addEventListener('submit', (e) => {
    e.preventDefault();
    checkInputs(firstName, 'First name cannot be blank');
    checkInputs(lastName, 'Last name cannot be blank');
    checkInputs(password, 'Password cannot be blank');
    if (email.value == '') {
        checkInputs(email, 'email cannot be blank')
    } else {
        validaetEmail(email)
    }
})
