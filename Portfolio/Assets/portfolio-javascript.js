

function func() {
    'use strict';
    let mq = window.matchMedia("(min-width: 736px)");
    let navTitle = document.querySelector(".anchor-text");
    let menuIcon = document.getElementById("menuIcon");
    let aTag = document.getElementById("anchor-adjustor");
    let page = document.getElementById("identifier");

    if (page.className === "portfolio") {
        navTitle.innerHTML = "Portfolio";
        if (mq.matches) {
            aTag.setAttribute('href', 'index.html');
        }
        mq.onchange = function () {
            if (!mq.matches) {
                aTag.removeAttribute('href');
            }
            else {
                aTag.setAttribute('href', 'index.html');
            }
        };
    }
    else if (page.className === "contact") {

        if (!mq.matches) {
            navTitle.innerHTML = "Contact";
        }
        else {
            navTitle.innerHTML = "Portfolio";
            aTag.setAttribute('href', '../../index.html');
        }

        mq.onchange = function () {
            if (!mq.matches) {
                navTitle.innerHTML = "Contact";
                aTag.removeAttribute('href');
            }
            else {
                navTitle.innerHTML = "Portfolio";
                aTag.setAttribute('href', '../../index.html');
            }
        };

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

window.onload = function () {
    func();
};

function showMore() {
    x = document.getElementById("checkButton");
    hiddenTxt = document.getElementById("hiddenTxt");
    txtChange = document.getElementById("show-more-txt");
    icon = document.getElementById("showIcon");

    if (x.className === "show-more") {
        hiddenTxt.style.display = "initial";
        x.style.color = "grey";
        txtChange.innerHTML = "Show Less";
        icon.className = "fa fa-angle-up";
        x.className = "show-less";
    }
    else {
        hiddenTxt.style.display = "none";
        txtChange.innerHTML = "Show More";
        icon.className = "fa fa-angle-down";        
        x.className = "show-more";
    }

}



