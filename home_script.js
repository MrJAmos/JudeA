
function dropMenu() {
    'use strict';
    let x = document.getElementById('display-menu');
    let menu = document.getElementById('menuIcon');    
    if (x.className === "hide-menu") {
        x.className += " show-menu";        
        menu.className = "fa-close";
        menu.style.color ="#e74a43";
    }
    else {
        x.className = "hide-menu";
        menu.className = "fa-align-justify";
        menu.style.color ="white";      
    }
}

function dropContactMenu() {
    'use strict';
    let x = document.getElementById('display-contactMenu');
    let menu = document.getElementById('contactMenuIcon');    

    if (x.className === "hide-menu") {
        x.className += " show-menu"; 
        menu.className = "fa fa-angle-up";
    }
    else {
        x.className = "hide-menu";
        menu.className = "fa fa-angle-down";
    }
}