/** solo es una idea deberias de porde rhacerlo mejor que yo*/
function toggleMenu() {
    var menu = document.getElementById("menu");
    menu.classList.toggle("hidden");
}

function hideMenu() {
    var menu = document.getElementById("menu");
    menu.classList.add("hidden");
}
// JavaScript para el desplazamiento suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// js/menu.js

document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');

    hamburger.addEventListener('click', function () {
        if (navMenu.style.display === 'block') {
            navMenu.style.display = 'none';
        } else {
            navMenu.style.display = 'block';
        }
    });
});

