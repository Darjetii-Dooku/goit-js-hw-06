const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const container = document.querySelector(`#ingredients`);
ingredients.forEach((fruit) => {
  const li = document.createElement('li');
  li.textContent = fruit;
  li.classList.add('item')
  container.append(li);
});
