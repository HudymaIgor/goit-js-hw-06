const validationInput = document.querySelector('#validation-input');
console.log(validationInput);

// const inputLenghtUnit = Number(validationInput.target.dataset.lenght);
// console.log(inputLenghtUnit);

validationInput.addEventListener('blur', (even) => {


    if (even.target.value.length === Number(even.target.dataset.length)) {
        
        
        validationInput.classList.add('valid');

        validationInput.classList.remove('invalid');
    } else {
        validationInput.classList.add('invalid');
        
        validationInput.classList.remove('valid');
    }
}); 