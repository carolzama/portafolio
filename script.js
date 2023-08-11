// Constantes que hacen referencia a los elementos del HTML
const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');


// Cuando se clickea el menu-toggle, se activa el menu
menuToggle.addEventListener('click', () => {
    menu.classList.toggle('active');
});
