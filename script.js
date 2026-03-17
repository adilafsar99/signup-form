const handleInput = (input) => {
    const inputParent = input.parentElement;
    const errorBox = inputParent.lastElementChild;
    if (!input.checkValidity()) {
        inputParent.classList.add('invalid');
        errorBox.classList.add('visible');
        console.log(input.name)
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