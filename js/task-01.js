const categoryList = document.querySelector('#categories');
console.log(`Number of categories: ${categoryList.children.length}`)
const categoryItem = categoryList.querySelectorAll('.item')
categoryItem.forEach((catItem) => {
    const catName = catItem.querySelector('h2').textContent;
    const catList = catItem.querySelectorAll('li');
    console.log(`Category: ${catName}`);
    console.log(`Elements: ${catList.length}`)
});