const nameInput = document.querySelector('#name-input');
console.log(nameInput);
const nameOutpute = document.querySelector('#name-output');
console.log(nameOutpute);



nameInput.addEventListener("input", (event) => {
    if (event.target.value === "") {
        nameOutpute.textContent = 'Anonymous';
        
    } else {
    nameOutpute.textContent = event.currentTarget.value;
    }
});