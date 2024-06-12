// Función para alternar la visibilidad del menú flotante
function toggleMenu() {
    const menuList = document.getElementById('menuList');
    menuList.classList.toggle('hidden');
}

// Función para ocultar el menú flotante
function hideMenu() {
    const menuList = document.getElementById('menuList');
    menuList.classList.add('hidden');
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

// Evento para alternar el menú de navegación en dispositivos móviles
document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.querySelector('.navbar-toggler');
    const navMenu = document.getElementById('navbarNav');

    hamburger.addEventListener('click', function () {
        navMenu.classList.toggle('show');
    });
});
