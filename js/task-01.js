const menuCategoriesList = categories => {
    const itemElements = document.querySelectorAll(categories);

    console.log(`Number of categories: ${itemElements.length}`);

    itemElements.forEach(el => {
        console.log(`Category: ${el.firstElementChild.textContent}`)
        console.log(`Elements: ${el.lastElementChild.children.length}`)
    });
};

menuCategoriesList ('.item')