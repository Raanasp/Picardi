'use strict';

const Overlay = document.querySelector("[data-overlay]");
const navOpenBtn =document.querySelector("[data-nav-open-btn]");
const navbar = document.querySelector("[data-navbar]");
const navclosebtn =document.querySelector("[data-nav-close-btn]");

const navElemArr = [Overlay ,navOpenBtn ,navclosebtn];

for( let i =0; i < navElemArr.length; i++) {

  navElemArr[i].addEventListener("click" , function() {
    navbar.classList.toggle("active");
    Overlay.classList.toggle("active");
  });
}

