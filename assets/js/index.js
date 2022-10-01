'use strict';

/**
 * header sticky & back top btn active
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

window.addEventListener("scroll", headerActive)
function headerActive() {
    if (window.scrollY > 100) {
        header.classList.add("active");
        backTopBtn.classList.add("active");
    } else {
        header.classList.remove("active");
        backTopBtn.classList.remove("active");
    }
}


window.addEventListener("scroll", headerSticky)
let lastScrolledPos = 0;
function headerSticky() {
    if (lastScrolledPos >= window.scrollY) {
        header.classList.remove("header-hide");
    } else {
        header.classList.add("header-hide");
    }

    lastScrolledPos = window.scrollY;
}


/**
 * scroll reveal effect
 */

const sections = document.querySelectorAll("[data-section]");
window.addEventListener("scroll", scrollReveal)

function scrollReveal() {
    sections.forEach((section) => {
        if (section.getBoundingClientRect().top < window.innerHeight / 2) {
            section.classList.add("active");
        }
    })
}
scrollReveal();

/**
 * navbar toggle
 */

const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const navbar = document.querySelector("[data-navbar]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const overlay = document.querySelector("[data-overlay]");

navTogglers.forEach((navToggler) => {
    navToggler.onclick = function () {
        navbar.classList.toggle("active");
        overlay.classList.toggle("active");
    }
})

navbarLinks.forEach((navbarLink) => {
    navbarLink.onclick = function () {
        navbar.classList.remove("active");
        overlay.classList.remove("active");
    }
})

