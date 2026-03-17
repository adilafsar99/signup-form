const checkInput = (input) => {
    const inputParent = input.parentElement;
    const errorBox = inputParent.lastElementChild;
    if (!input.checkValidity()) {
        if (input.validity.valueMissing) {
            errorBox.textContent = "Required field!";
        }
        if (input.validity.typeMismatch) {
            errorBox.textContent = 'Required format: name@example.com';
        }
        if (input.validity.patternMismatch) {
            errorBox.textContent = 'Required format: 03xxxxxxxxx';
        }
        if (input.validity.tooShort) {
            errorBox.textContent = 'Minimum length: 8 characters.'
        }
        input.classList.add('invalid');
        input.classList.remove('valid');
        errorBox.classList.add('visible');
        isValid = false;
        input.focus();
    }
    else {
        input.classList.remove('invalid');
        input.classList.add('valid');
        errorBox.classList.remove('visible');
        isValid = true;
    }
    return isValid;
}

const handleSubmit = (event) => {
    event.preventDefault();
    for (const input of inputs) {
        isValid = checkInput(input);
        if (!isValid) {
            return;
        }
    }
}

let isValid = false;

const signupForm = document.querySelector('.signup-form');
const inputNodes = document.querySelectorAll('input');
const inputs = Array.from(inputNodes);

signupForm.addEventListener('focusout', (event) => {
    checkInput(event.target);
})
signupForm.addEventListener('submit', handleSubmit);