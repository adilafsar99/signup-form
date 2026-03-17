const handleInput = (input) => {
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
        inputParent.classList.add('invalid');
        errorBox.classList.add('visible');
    }
    else {
        inputParent.classList.remove('invalid');
        errorBox.classList.remove('visible');
    }
}

const handleSubmit = (event) => {
    event.preventDefault();
    for (const input of inputs) {
        handleInput(input);
    }
}

const signupForm = document.querySelector('.signup-form');
const inputNodes = document.querySelectorAll('input');
const inputs = Array.from(inputNodes);

signupForm.addEventListener('submit', handleSubmit);