

function func() {
    'use strict';
    let menuIcon = document.getElementById("menuIcon");
    let aTag = document.getElementById("portfoliotext");
    let node = document.createTextNode("Portfolio");
    aTag.insertBefore(node,menuIcon);

    let mq = window.matchMedia("(min-width: 736px)");
    
    if (!mq.matches) {
        aTag.removeAttribute('href');
    }
    else {
        let x = document.getElementsByTagName("TITLE")[0].textContent;
        if(x === "Contact Page"){
            aTag.setAttribute('href', '../../index.html');                    
        }
        else if(x === "Jude Amos"){
            aTag.setAttribute('href', 'index.html');                                
        }
    }
}

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

window.onload = function() {
    func();
}





