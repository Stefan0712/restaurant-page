



function createMenu(){
    const content = document.getElementById("content");
    const header = document.querySelector(".header");
    const mainContainer = document.querySelector(".main-container");
    const menuContainer = document.createElement('div');
    menuContainer.classList.add('menuContainer');
    content.appendChild(menuContainer);

    for(let i=0;i<5;i++){
        var itemContainer = document.createElement('div');
        itemContainer.classList.add('itemContainer');
        var item = document.createElement('img');
        item.setAttribute('src',`./imgs/item${i}`);
        item.classList.add('items');
        menuContainer.appendChild(itemContainer);
        itemContainer.appendChild(item);
    }


}












function prepareMenu(){
  
    createMenu();
}

export {prepareMenu}