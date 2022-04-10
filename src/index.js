const gallery = document.getElementById("gallery");
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