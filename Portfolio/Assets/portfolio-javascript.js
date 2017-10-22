

function dropMenu() {
    'use strict';
    let x = document.getElementById('display-menu');
    let menu = document.getElementById('menuIcon');
    let mq = window.matchMedia("(min-width: 736px)");

    if (!mq.matches) {
        if (x.className === "hide-element mobile-dropmenu") {
            x.className += " show-element";
            menu.style.color = "#e74a43";

        }
        else {
            x.className = "hide-element mobile-dropmenu";
            menu.style.color = "white";
        }
    }
}

