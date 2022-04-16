import { createMenu } from './menu'
import { createRezervations } from './rezervations';
import { createAbout } from './about';

window.createMenu = createMenu;
window.createRezervations = createRezervations;
window.createNewHome = createNewHome;
window.createAbout = createAbout;
window.nextImg = nextImg;
window.prevImg = prevImg;

const content = document.getElementById("content");

//header

function createHeader(){

const header = document.createElement('div');
header.classList.add("header");
content.appendChild(header);

//header content
const headerTitle = document.createElement('h1');
headerTitle.innerText = "San Carlo";
header.appendChild(headerTitle);

const homeBtn = document.createElement('a');
homeBtn.setAttribute('id','home');
homeBtn.setAttribute('onclick', "createNewHome()");
homeBtn.innerText="Home";
header.appendChild(homeBtn);

const menuBtn = document.createElement('a');
menuBtn.setAttribute('id','menu');
menuBtn.innerText="Menu";
menuBtn.setAttribute('onclick', "createMenu()");
header.appendChild(menuBtn);

const rezBtn = document.createElement('a');
rezBtn.setAttribute('id','reservations');
rezBtn.setAttribute('onclick', "createRezervations()");
rezBtn.innerText="Reservations";
header.appendChild(rezBtn);

const aboutBtn = document.createElement('a');
aboutBtn.setAttribute('id','about');
aboutBtn.setAttribute('onclick', "createAbout()");
aboutBtn.innerText="About";
header.appendChild(aboutBtn);



}

function createMainContainer(){
    

    const mainContainer = document.createElement('div');
    mainContainer.classList.add('main-container');
    content.appendChild(mainContainer);

    const gallery = document.createElement('div');
    gallery.classList.add('gallery');
    mainContainer.appendChild(gallery);

    const imgContainer = document.createElement('div');
    imgContainer.setAttribute('id','img-container');
    gallery.appendChild(imgContainer);

    const leftArrow = document.createElement('div');
    leftArrow.classList.add("arrows");
    leftArrow.setAttribute('id','left-arrow');
    leftArrow.setAttribute('onclick','prevImg()');
    leftArrow.innerText = "←";


    const image = document.createElement('img');
    image.setAttribute('id','currentImg');
    image.setAttribute('src','./imgs/img1.jpg');


    const rightArrow = document.createElement('div');
    rightArrow.classList.add("arrows");
    rightArrow.setAttribute('id','right-arrow');
    rightArrow.setAttribute('onclick','nextImg()');
    rightArrow.innerText = "→";



    imgContainer.appendChild(leftArrow);
    imgContainer.appendChild(image);
    imgContainer.appendChild(rightArrow);

    const description = document.createElement("div");
    description.classList.add("description");
    description.innerText = "We offer one of the most stylish and exclusive spaces for private dining in Manchester, with no room hire charge and a range of menus available. Contact our team for more information."
    mainContainer.appendChild(description);

    const reviews = document.createElement('div');
    reviews.classList.add('reviews');
    reviews.innerText = `"What is most striking about San Carlo is the sense of a restaurant that knows exactly what it's doing and why"`;
    const revAuth = document.createElement('div');
    revAuth.innerText = "- The Observer";
    revAuth.setAttribute('id','revAuth');
    mainContainer.appendChild(reviews);
    reviews.appendChild(revAuth);


    const location = document.createElement('div');
    location.classList.add('location');
    mainContainer.appendChild(location);

    const map = document.createElement('div');
    map.classList.add('map');
    location.appendChild(map);

    const mapImg = document.createElement('img');
    mapImg.setAttribute('src','./imgs/mapimg.jpg');

    const address = document.createElement('h2');
    address.innerText = "King St W, Manchester M3 2WY, United Kingdom";

    map.appendChild(mapImg);
    map.appendChild(address);


    const footer = document.createElement('div');
    footer.classList.add("footer");
    footer.innerHTML = "This is just a footer";
    mainContainer.appendChild(footer);
}
createHeader();
createMainContainer();

const img = document.getElementById("currentImg");
let index = 1;
function nextImg(){

    if(index<=3){
        img.setAttribute("src",`./imgs/img${index}.jpg`);
        index++;
    } else{
        index = 1;
        nextImg();
    }
};
function prevImg(){

    if(index>=1){
        img.setAttribute("src",`./imgs/img${index}.jpg`);
        index--;
    } else{
        index = 3;
        prevImg();
    }
}; 





function prepareHome(){
    createHeader();
    createMainContainer();
    //simple image gallery
    const gallery = document.getElementById("gallery");
    const img = document.getElementById("currentImg");

    
} 
function createNewHome(){
    const oldMainContainer = document.querySelector(".main-container")
    oldMainContainer.remove();
    createMainContainer();
}

export {prepareHome, createNewHome, nextImg, prevImg}