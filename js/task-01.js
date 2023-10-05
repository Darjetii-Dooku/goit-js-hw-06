const categoryList = document.querySelector('#categories');
console.log(`Number of categories: ${categoryList.children.length}`)
const categoryItem = categoryList.querySelectorAll('.item')
categoryItem.forEach((catItem) => {
    const catName = catItem.firstElementChild.textContent;
    const catList = catItem.lastElementChild;
    console.log(`Category: ${catName}`);
    console.log(`Elements: ${catList.children.length}`)
});
