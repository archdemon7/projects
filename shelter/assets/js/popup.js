import {pets} from '../../assets/js/pets.js';

const sliderContainer = document.querySelector('.slider-container');
const popUpWrapper = document.querySelector('.popup-wrapper');
const popUpClose = document.querySelector('.popup-close');
const body = document.querySelector('body');

sliderContainer.addEventListener('click', e => {
    if (e.target.classList.contains('slider-item') || 
        e.target.parentElement.classList.contains('slider-item') || 
        e.target.parentElement.parentElement.classList.contains('slider-item')) {
            let index = e.target.closest('.slider-item').getAttribute('cardid');
            createCard(index);
            popUpWrapper.classList.add('active');
            body.classList.toggle('hidden');
    };
})

popUpClose.addEventListener('click', e => {
    popUpWrapper.classList.remove('active');
    body.classList.toggle('hidden');
})

popUpWrapper.addEventListener('click', e => {
    if (e.target.classList.contains('popup-wrapper')) {
        popUpWrapper.classList.remove('active');
        body.classList.toggle('hidden');
    }
})

const petsImg = document.querySelector('.pets-img');
const petsTitle = document.querySelector('.pets-title');
const petsSubtitle = document.querySelector('.pets-subtitle');
const petsInfo = document.querySelector('.pets-info');
const age = document.querySelector('.pets-item__age');
const inoculations = document.querySelector('.pets-item__inoculations');
const diseases = document.querySelector('.pets-item__diseases');
const parasites = document.querySelector('.pets-item__parasites');

function createCard(index) {
    petsImg.src = pets[index]["img"];
    petsTitle.innerText = pets[index]["name"];
    petsSubtitle.innerText = pets[index]["type"];
    petsInfo.innerText = pets[index]["description"];
    age.innerText = pets[index]["age"];
    inoculations.innerText = pets[index]["diseases"].join(', ');
    diseases.innerText = pets[index]["diseases"].join(', ');
    parasites.innerText = pets[index]["parasites"].join(', ');
}