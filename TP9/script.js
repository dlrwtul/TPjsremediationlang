const items = document.querySelector(".items");
const inputrecherche = document.querySelector("#recherche");
const voirplus = document.querySelector("#voirplus");

var page = 1;
/* fetch('https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1')
.then(response => response.json())
.then(data => (data.results)) */

//====================================================
let url = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=';
let urlrecherche = "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query="
async function getMovies(url) {
    try {
        let response = await fetch(url);
        return await response.json();
    } catch (err) {
        console.log("error");
    }
}


function color_rate(rate) {
    if (rate < 5) {
        return "red";
    } else if (rate < 7) {
        return "orange";
    } else {
        return "green";
    }
}

function build_item(title,rate,overview,imgpath) {
    const item = document.createElement("div");
    item.className = "item";

    const affiche = document.createElement("div");
    affiche.className = "affiche";
    affiche.style.backgroundImage = `url('https://image.tmdb.org/t/p/w1280${imgpath}')`
    
    item.appendChild(affiche);

    const info = document.createElement("div");
    info.className = "info";

    const span1 = document.createElement("span");
    span1.className = "title";
    span1.innerHTML = title;

    const span2 = document.createElement("span");
    span2.innerHTML = rate;
    span2.style.color = color_rate(rate);

    const h1 = document.createElement("h1");
    h1.innerHTML = "Overview";

    const p = document.createElement("p");
    p.innerHTML = overview;

    info.appendChild(span1);
    info.appendChild(span2);

    info.addEventListener("mouseenter", function () {
        this.classList.add("overview");
        info.innerHTML = "";
        info.appendChild(h1);
        info.appendChild(p);
    })

    info.addEventListener("mouseleave", function () {
        this.classList.remove("overview");
        info.innerHTML = "";
        info.appendChild(span1);
        info.appendChild(span2);
    })

    item.appendChild(info);
    items.appendChild(item);
}

function show_movies(url) {
    
    let moviesbd =  getMovies(url);
    moviesbd.then((value) => {
        let movies = value.results;
        movies.forEach(movie => {
            build_item(movie.title , movie.vote_average , movie.overview,movie.poster_path);
        });
    })
}

//====================================================

show_movies(url+page)

inputrecherche.addEventListener('keyup',function (e) {
    
    if (inputrecherche.value.trim() !== "") {
        if (e.keyCode == 13) {
            items.innerHTML = "";
            show_movies(urlrecherche+this.value);
        }
    } else {
        items.innerHTML = "";
        show_movies(url)
    }
})

voirplus.addEventListener('click',function () {
    page++;
    show_movies(url+page);
})

document.querySelector("#returnToTop").addEventListener('click',function () {
    window.scrollTo({
        top:0,
        behavior:"smooth"
    });
})

window.addEventListener('scroll',()=> {
    const scrollFirst = document.body.offsetHeight - window.innerHeight;
    const scrollSecond = window.scrollY;
    if (scrollFirst <= scrollSecond) {
        page++;
        show_movies(url+page);
    }
    sessionStorage.setItem('scroll',scrollSecond);
    sessionStorage.setItem('page',page);
})

document.onreadystatechange = function () {

    if (document.readyState !== 'complete') {
        document.querySelector(".charging").classList.add("show")
        items.style.display="none";
    } else {
        setTimeout(() => {
            items.style.display="flex";
        }, 2000);
    }
    var dataPage = sessionStorage.getItem('page')
    for (let index = 2; index <= dataPage; index++) {
        page = index;
        show_movies(url+page);
    }
}

setTimeout(() => {
    function scroll_down() {
        window.scrollTo({
            top:sessionStorage.getItem('scroll'),
            behavior:"smooth"
        });
    }
    
    scroll_down();
}, 2100);