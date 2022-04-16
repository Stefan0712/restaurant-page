



function createMenu(){
    

    const content = document.getElementById("content");
    const oldMainContainer = document.querySelector(".main-container");
    oldMainContainer.remove();

    const mainContainer = document.createElement("div")
    mainContainer.classList.add('main-container');
    content.appendChild(mainContainer);

    const menuContainer = document.createElement("div")
    menuContainer.classList.add("menu-container")
    mainContainer.appendChild(menuContainer)

    for(let i=1;i<=6;i++){
        var itemContainer = document.createElement('div');
        itemContainer.classList.add('itemContainer');
        var item = document.createElement('img');
        item.setAttribute('src',`./imgs/item${i}.jpg`);
        item.classList.add('items');
        menuContainer.appendChild(itemContainer);
        itemContainer.appendChild(item);
    }


}














export {createMenu}