const limenu = document.querySelector("#limenu");
const btnmenu = document.querySelector("#btnmenu");
const menu = document.querySelector(".menu");

const showArray2 = [
    {
        'title':'Dashboard',
        'icon1':'fa-solid fa-gauge-high fa-lg',
        'icon2':'',
        'icon3':'fa-solid fa-angle-left',
        'level':1,
        'sousmenu':
        [
            {
                'title':'LUT',
                'icon1':'fa-regular fa-circle fa-lg',
                'icon2':'',
                'icon3':'fa-solid fa-angle-left',
                'level':2,
                'sousmenu':
                [
                    {
                        'title':'LUT',
                        'icon1':'fa-regular fa-circle fa-lg',
                        'icon2':'',
                        'icon3':'',
                        'level':3,
                        'sousmenu':''
                    },
                    {
                        'title':'wrld',
                        'icon1':'fa-regular fa-circle fa-lg',
                        'icon2':'',
                        'icon3':'',
                        'level':3,
                        'sousmenu':''
                    },
                    {
                        'title':'wrlds',
                        'icon1':'fa-regular fa-circle fa-lg',
                        'icon2':'',
                        'icon3':'',
                        'level':3,
                        'sousmenu':''
                    }
                ]
            },
            {
                'title':'wrld',
                'icon1':'fa-regular fa-circle fa-lg',
                'icon2':'',
                'icon3':'',
                'level':2,
                'sousmenu':''
            },
            {
                'title':'wrlds',
                'icon1':'fa-regular fa-circle fa-lg',
                'icon2':'',
                'icon3':'',
                'level':2,
                'sousmenu':''
            }
        ]
    },
    {
        'title':'Widgets',
        'icon1':'fa-solid fa-gauge-high fa-lg',
        'icon2':'',
        'icon3':'',
        'level':1,
        'sousmenu':''
    },
    {
        'title':'Layout Options',
        'icon1':'fa-solid fa-file fa-lg',
        'icon2':'',
        'icon3':'fa-solid fa-angle-left',
        'level':1,
        'sousmenu':
        [
            {
                'title':'Lutwrld',
                'icon1':'fa-regular fa-circle fa-lg',
                'icon2':'',
                'icon3':'',
                'level':2,
                'sousmenu':''
            },
            {
                'title':'Lutwrld',
                'icon1':'fa-regular fa-circle fa-lg',
                'icon2':'',
                'icon3':'',
                'level':2,
                'sousmenu':''
            },
            {
                'title':'Lutwrld',
                'icon1':'fa-regular fa-circle fa-lg',
                'icon2':'',
                'icon3':'',
                'level':2,
                'sousmenu':''
            },
            {
                'title':'Lutwrld',
                'icon1':'fa-regular fa-circle fa-lg',
                'icon2':'',
                'icon3':'',
                'level':2,
                'sousmenu':''
            }
        ]
    },
    {
        'title':'Charts',
        'icon1':'fa-solid fa-chart-pie fa-lg',
        'icon2':'',
        'icon3':'fa-solid fa-angle-left',
        'level':1,
        'sousmenu':
        [
            {
                'title':'ChartJS',
                'icon1':'fa-regular fa-circle fa-lg',
                'icon2':'',
                'icon3':'',
                'level':2,
                'sousmenu':''
            },
            {
                'title':'Flot',
                'icon1':'fa-regular fa-circle fa-lg',
                'icon2':'',
                'icon3':'',
                'level':2,
                'sousmenu':''
            },
            {
                'title':'Inline',
                'icon1':'fa-regular fa-circle fa-lg',
                'icon2':'',
                'icon3':'',
                'level':2,
                'sousmenu':''
            },
            {
                'title':'uPlot',
                'icon1':'fa-regular fa-circle fa-lg',
                'icon2':'',
                'icon3':'',
                'level':2,
                'sousmenu':''
            }
        ]
    },
    {
        'title':'UI Elements',
        'icon1':'fa-solid fa-bell fa-lg',
        'icon2':'',
        'icon3':'fa-solid fa-angle-left',
        'level':1,
        'sousmenu':
        [
            {
                'title':'Lutwrld',
                'icon1':'fa-regular fa-circle fa-lg',
                'icon2':'',
                'icon3':'',
                'level':2,
                'sousmenu':''
            },
            {
                'title':'Lutwrld',
                'icon1':'fa-regular fa-circle fa-lg',
                'icon2':'',
                'icon3':'',
                'level':2,
                'sousmenu':''
            },
            {
                'title':'Lutwrld',
                'icon1':'fa-regular fa-circle fa-lg',
                'icon2':'',
                'icon3':'',
                'level':2,
                'sousmenu':''
            },
            {
                'title':'Lutwrld',
                'icon1':'fa-regular fa-circle fa-lg',
                'icon2':'',
                'icon3':'',
                'level':2,
                'sousmenu':''
            }
        ]
    },
    {
        'title':'Forms',
        'icon1':'fa-solid fa-pen-to-square fa-lg',
        'icon2':'',
        'icon3':'fa-solid fa-angle-left',
        'level':1,
        'sousmenu':
        [
            {
                'title':'Lutwrld',
                'icon1':'fa-regular fa-circle fa-lg',
                'icon2':'',
                'icon3':'',
                'level':2,
                'sousmenu':''
            },
            {
                'title':'Lutwrld',
                'icon1':'fa-regular fa-circle fa-lg',
                'icon2':'',
                'icon3':'',
                'level':2,
                'sousmenu':''
            }
        ]
    },
    {
        'title':'Tables',
        'icon1':'fa-solid fa-table fa-lg',
        'icon2':'',
        'icon3':'fa-solid fa-angle-left',
        'level':1,
        'sousmenu':
        [
            {
                'title':'Lutwrld',
                'icon1':'fa-regular fa-circle fa-lg',
                'icon2':'',
                'icon3':'',
                'level':2,
                'sousmenu':''
            },
            {
                'title':'Lutwrld',
                'icon1':'fa-regular fa-circle fa-lg',
                'icon2':'',
                'icon3':'',
                'level':2,
                'sousmenu':''
            },
            {
                'title':'Lutwrld',
                'icon1':'fa-regular fa-circle fa-lg',
                'icon2':'',
                'icon3':'',
                'level':2,
                'sousmenu':''
            }
        ]
    }
    
    
]

//==============================================
function build(array) {
    const div = document.createElement('div');
    array.forEach(element => {
        const newdiv = document.createElement('div');
        newdiv.className = "menuli"

        const firstdiv = document.createElement('div');

        const titlespan = document.createElement('span')

        const icon1 = document.createElement('i');
        icon1.className = element.icon1;

        const titlep = document.createElement('p');
        titlep.innerText = element.title;

        titlespan.appendChild(icon1);
        titlespan.appendChild(titlep);

        const lastspan = document.createElement('span')

        const icon2 = document.createElement('i');
        icon2.className = element.icon2;

        const icon3 = document.createElement('i');
        icon3.className = element.icon3;

        lastspan.appendChild(icon2);
        lastspan.appendChild(icon3);

        firstdiv.appendChild(titlespan);
        firstdiv.appendChild(lastspan);
        firstdiv.setAttribute('level',`level${element.level}`);
        newdiv.appendChild(firstdiv);

        if (element.sousmenu !== '') {

            firstdiv.addEventListener('click',function () {
                const clicked = document.querySelector(".clicked");
                if (clicked !== null && clicked !== this && clicked.getAttribute('level') === this.getAttribute('level')) {
                    clicked.classList.remove("clicked");
                }
                this.classList.toggle("clicked");
            })

            const lastdiv = build(element.sousmenu);
            lastdiv.className = "sousmenu"
            newdiv.appendChild(lastdiv);

        }

        div.appendChild(newdiv);

    });
    return div;

}

//===============================================

limenu.appendChild(build(showArray2));

btnmenu.addEventListener('click',function () {

    limenu.querySelectorAll("i").forEach(element => {
        element.classList.toggle("fa-xl");
    });
    menu.classList.toggle("hidden");
})
