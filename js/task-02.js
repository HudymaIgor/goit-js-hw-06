const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const unitIngredients = ingredients.map((el) => {

  const ingredientsLi = document.createElement('li')

  ingredientsLi.classList.add('atem')
  ingredientsLi.textContent = el
 return ingredientsLi
});
const ulIngredients = document.querySelector( '#ingredients' );

ulIngredients.append(...unitIngredients);

