const img = document.querySelector(".container>img");
const btnleft = document.querySelector("#btnleft");
const btnright = document.querySelector("#btnright");

let index = 0;
const pics = [
    "1.png",
    "2.jpg",
    "3.jpg",
    "4.png",
    "5.jpg",
    "6.jpg",
    "7.jpg",
    "8.jpg",
    "9.png",
    "10.jpg",
    "11.png",
    "12.jpg",
    "13.jpg",
    "14.jpg",
    "15.jpg",
    "16.png",
    "17.jpg",
    "18.png",
    "19.png",
    "20.jpg"
]

//====================
insert_src(pics[index])
function insert_src(src) {
    img.src = `img/${src}`;
    img.parentElement.style.backgroundImage = `linear-gradient(rgba(255,255,255,0.1),rgba(255,255,255,0.1)),url('/TPjssuite/TP7/img/${src}')`
}

function build(num) {
    index = index + num
    if (index < 0) {
        index = pics.length - 1
    }
    if (index >= pics.length ) {
        index = 0
    }
    insert_src(pics[index])
    console.log(index)
}

function resetIntervalle() {
    clearInterval(intervalle);
    intervalle = setInterval(() => {
        build(1)
    }, 5000);
}

//=================

btnleft.addEventListener('click',function () { 
    build(-1);
    resetIntervalle();
})

btnright.addEventListener('click',function () {  
    build(1);
    resetIntervalle();
})

let intervalle = setInterval(() => {
    build(1)
}, 5000);