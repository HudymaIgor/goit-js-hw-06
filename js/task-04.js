const btnElDecrement = document.querySelector('[data-action="decrement"]')
const btnElincrement = document.querySelector('[data-action="increment"]')
const spanEL = document.querySelector('#value')
console.log(btnElDecrement)
console.log(spanEL)

let counterValue = 0;

btnElincrement.addEventListener('click', () => {
    counterValue += Number("1");
     spanEL.textContent = counterValue;
});

btnElDecrement.addEventListener("click", () => {
spanEL.textContent -= 1;
    
});


