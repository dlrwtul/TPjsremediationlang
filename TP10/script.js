const recettes = document.querySelector(".second");
const modal = document.querySelector(".modal");
const btnsearch = document.querySelector(".search span:last-child");
const inputsearch = document.querySelector("#inputsearch");


const url = 'https://www.themealdb.com/api/json/v1/1/random.php';
const urlrecherchename = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
const urlrechercheid = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=';


//=======================================


async function getRecette(url) {
    try {
        let response = await fetch(url);
        return await response.json();
    } catch (err) {
        console.log("error");
    }
}

function create_recette(array) {
    const divrecette = document.createElement('div');
    divrecette.className = "recette";

    const pic = document.createElement('div');
    pic.className = "pic";
    pic.style.backgroundImage = `url(${array.strMealThumb})`;

    const spanpic = document.createElement("span");
    spanpic.className = "generer";
    spanpic.innerHTML = "Generer une Recette";

    spanpic.addEventListener('click',function () {
        recettes.innerHTML = "";
        show_recette(url)
    })

    pic.appendChild(spanpic);

    const footer = document.createElement('div');
    footer.className = "footer";

    const span1 = document.createElement('span');
    span1.innerHTML = array.strMeal;

    const span2 = document.createElement('span');

    const ispan2 = document.createElement("i");
    ispan2.className = "fa-solid fa-heart fa-2xl"
    
    span2.appendChild(ispan2);

    span2.addEventListener('click',function (e) {
        const pos = window.scrollY;
        const info = document.createElement("div");
        info.className = "info";

        const infoheader = document.createElement("div");
        infoheader.className = "infoheader";

        const span3 = document.createElement("span");
        span3.innerHTML = array.strMeal;

        const span4 = document.createElement('span');

        const ispan4 = document.createElement("i");
        ispan4.className = "fa-solid fa-circle-xmark"
        
        span4.appendChild(ispan4);

        span4.addEventListener('click',function (e) {
            
            e.target.parentElement.parentElement.remove();
            modal.innerHTML ='';
            modal.style.display = "none";
            document.body.style.overflow="scroll";
            scroll_(pos);
        })

        infoheader.appendChild(span3);
        infoheader.appendChild(span4);

        const infobody = document.createElement("div");
        infobody.className = "infobody";

        infobody.style.backgroundImage = `url(${array.strMealThumb})`;

        const infofooter = document.createElement("div");
        infofooter.className = "infofooter";

        const p = document.createElement("p");
        p.innerHTML = array.strInstructions;

        const ul = document.createElement("ul");
        const h2 = document.createElement("h2");
        h2.innerHTML = "Ingredients:"
        ul.appendChild(h2);
        for (let index = 1; index <= 20; index++) {
            if (array["strIngredient"+index] !== "") {
                const li = document.createElement("li");
                li.innerHTML = `${array["strIngredient"+index]} - ${array["strMeasure"+index]}`;

                ul.appendChild(li);
            }
        }

        infofooter.appendChild(p);
        infofooter.appendChild(ul);

        info.appendChild(infoheader);
        info.appendChild(infobody);
        info.appendChild(infofooter);

        modal.appendChild(info);
        modal.style.display = "flex";
        document.body.style.overflow="hidden";
        scroll_(0);
    })

    footer.appendChild(span1);
    footer.appendChild(span2);

    divrecette.appendChild(pic);
    divrecette.appendChild(footer)

    recettes.appendChild(divrecette);
}

function scroll_(number) {
    window.scrollTo(0,number);
}

function show_recette(url) {
    let jsonrecettes = getRecette(url);
    jsonrecettes.then((value) => {
        let recettes = value.meals;
        if (value.meals !== null) {
            recettes.forEach(recette => {
                create_recette(recette)
            });
        } else {
            alert("pas de recette disponible")
        }
    })
}

//=================================
show_recette(url)

btnsearch.addEventListener('click',function (e) {
    
    if (inputsearch.value.trim() !== "") {
        recettes.innerHTML = "";
        if (!isNaN(inputsearch.value)) {
            show_recette(urlrechercheid+inputsearch.value)
        } else {
            show_recette(urlrecherchename+inputsearch.value)
        }
        document.querySelectorAll(".generer").forEach(spangenerer => {
            spangenerer.remove();
        });
    } else {
        recettes.innerHTML = "";
        show_recette(url)
    }
})

inputsearch.addEventListener('keyup',function (e) {
    
    if (inputsearch.value.trim() !== "") {
        recettes.innerHTML = "";
        if (!isNaN(inputsearch.value)) {
            show_recette(urlrechercheid+inputsearch.value)
        } else {
            show_recette(urlrecherchename+inputsearch.value)
        }
        console.log(document.querySelectorAll(".generer"))
    } else {
        recettes.innerHTML = "";
        show_recette(url)
    }
})