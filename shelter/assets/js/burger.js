const burger = document.querySelector('.burger');
const burgerMenu = document.querySelector('.burger-menu');
const overlay = document.querySelector('.overlay');
const body = document.querySelector('body');
const links = document.querySelectorAll('.burger__nav-item');

burger.addEventListener('click', e => {
    burger.classList.toggle('active');
    burgerMenu.classList.toggle('active');
    overlay.classList.toggle('active');
    body.classList.toggle('hidden');
})

overlay.addEventListener('click', e => {
    burger.classList.toggle('active');
    burgerMenu.classList.toggle('active');
    overlay.classList.toggle('active');
    body.classList.toggle('hidden');
})

links.forEach(el => {
    el.addEventListener('click', e => {
        burger.classList.toggle('active');
        burgerMenu.classList.toggle('active');
        overlay.classList.toggle('active');
        body.classList.toggle('hidden');
    })
})