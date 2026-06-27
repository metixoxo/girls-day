function nextPage(page) {

    document.querySelector(".active").classList.remove("active");

    document.getElementById("page"+page).classList.add("active");

}


const images = [

"images/1.jpg",

"images/2.jpg",

"images/3.jpg",

"images/4.jpg"

];

let index = 0;

setInterval(()=>{

const slide=document.getElementById("slide");

if(!slide) return;

index++;

if(index>=images.length){

index=0;

}

slide.src=images[index];

},3000);
