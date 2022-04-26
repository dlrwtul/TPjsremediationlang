const buttons = document.querySelectorAll(".divbuttons div button");
const divNotifications = document.querySelector(".divnotifications");

//=============================

buttons.forEach(button => {
    button.addEventListener('click',function () {
        const contentDiv = `by LutwrldD ${this.id}`;
        const style = window.getComputedStyle(this);
        divBackgroundColor = style.backgroundColor;
        const notifdiv = document.createElement("div");
        notifdiv.style.backgroundColor = divBackgroundColor;
        notifdiv.innerHTML = contentDiv;
        divNotifications.appendChild(notifdiv);
        setTimeout(() => {notifdiv.remove();}, 1000);
    })
});

//a retenir const style = window.getComputedStyle(this);