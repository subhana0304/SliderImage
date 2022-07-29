const nextEl = document.querySelector(".next");
const prevEl = document.querySelector(".prev");
const slideEmageEl = document.querySelector(".image-container");
const imagesEl = document.querySelectorAll("img");

let currentImage = 1;
let timeOut;

//nextButton
nextEl.addEventListener("click", ()=>{
    currentImage++;
    clearTimeout(timeOut);
    updateImage();
});

//prevButton
prevEl.addEventListener("click", ()=>{
    currentImage--;
    clearTimeout(timeOut);
    updateImage();
});

//forTimmerContinue
updateImage();

function updateImage(){
    if(currentImage > imagesEl.length){
        currentImage = 1;
    }else if(currentImage < 1){
        currentImage = imagesEl.length;
    }

    //changeimage
    slideEmageEl.style.transform = `translateX(-${(currentImage -1) * 536}px`;

    //timersetting
    timeOut = setTimeout(()=>{
        currentImage++;
        updateImage()
    }, 3000);
}