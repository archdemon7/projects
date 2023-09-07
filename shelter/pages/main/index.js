import {pets} from '../../assets/js/pets.js';

// alert('Привет, друг. Я не успел сделать попапы, буду благодарен, если проверишь работу позже. Заранее спасибо)')

const slider = document.querySelector('.slider');
const leftArrow = document.querySelector('.slider__left-arrow');
const rightArrow = document.querySelector('.slider__right-arrow');
let isClick = true;
const indexArray = [0, 1, 2, 3, 4, 5, 6, 7];

function randomElement() {
    return Math.floor(Math.random() * (8 - 0)) + 0;
}

let totalCards = 3;

function createSlider(totalSliders) {
    let result = [];
    while (result.length < totalSliders) {
        let element = randomElement(indexArray);
        if (result.indexOf(element) == -1) {
            result.push(element);
        }
    }
    return result;
}


function createCard(index) {

    const sliderItem = document.createElement('div');
    sliderItem.classList.add('slider-item');
    sliderItem.setAttribute('cardid', index);
    slidesContainer.append(sliderItem);

    const imgContainer = document.createElement('div');
    imgContainer.classList.add('slider-item__img-container');
    sliderItem.append(imgContainer);

    const img = document.createElement('img');
    img.src = pets[index]["img"];
    img.alt = pets[index].name.toLowerCase();
    img.classList.add('slider-item__img');
    imgContainer.append(img);

    const petName = document.createElement('p');
    petName.classList.add('slider-item__pet-name');
    petName.textContent = pets[index].name;
    sliderItem.append(petName);

    const sliderButton = document.createElement('button');
    sliderButton.classList.add('slider-item__button');
    sliderButton.textContent = 'Learn more';
    sliderItem.append(sliderButton);
}
let slidesContainer;

function createSlide(array, position) {
    slidesContainer = document.createElement('div');
    slidesContainer.classList.add('slides-container');
    if (position == 'left') {
        slidesContainer.style.left = -1080 + 'px';
        slider.prepend(slidesContainer)
    } else if (position == 'right') {
        slidesContainer.style.left = totalCards * (360) + 'px';
        slider.append(slidesContainer)
    } else {
        slidesContainer.style.left = 0;
        slider.append(slidesContainer);
    }

    drawSlider(array)
}

const createSliderArray = createSlider(totalCards);

function drawSlider(array) {
    array.forEach((el) => {
        createCard(el);
    })
}

createSlide(createSliderArray);

function takeSlider() {
    let slider = document.querySelectorAll('.slider-item');
    return slider;
}

function createAdditionSlider(position) {
    const sliderItems = takeSlider();
    let slidersIds = [];
    sliderItems.forEach(el => {
        slidersIds.push(+el.getAttribute('cardid'));
    })
    let sliderId;
    if (position == 'left') {
        sliderId = slidersIds.slice(0, totalCards);
    } else if (position == 'right') {
        sliderId = slidersIds.slice(-totalCards);
    }
    let addSlider = [];
    while (addSlider.length < totalCards) {
        let element = randomElement(indexArray); {
            if (addSlider.indexOf(element) == -1 && sliderId.indexOf(element) == -1) {
                addSlider.push(element);
            }
        }
    }
    createSlide(addSlider, position);
}

createAdditionSlider('left');
createAdditionSlider('right');
function takeSlidesContainer() {
    let cnt = document.querySelectorAll('.slides-container');
    return cnt;
}

leftArrow.addEventListener('click', e => {
    if (isClick) {
        isClick = false;
        takeSlidesContainer().forEach(el => {
            el.style.left = parseInt(el.style.left, 10) + 1080 + 'px';
        });
        createAdditionSlider('left');

        while (takeSlidesContainer().length > 3) {
            slider.removeChild(document.querySelector('.slides-container:nth-last-child(1)'))
        }
        slider.addEventListener('animationend', e => {
            isClick = true;
        })
    }
})

rightArrow.addEventListener('click', e => {
    if (isClick) {
        isClick = false;
        takeSlidesContainer().forEach(el => {
            el.style.left = parseInt(el.style.left, 10) - 1080 + 'px';
        });
        createAdditionSlider('right');

        while (takeSlidesContainer().length > 3) {
            slider.removeChild(document.querySelector('.slides-container:nth-child(1)'))
        }
        slider.addEventListener('animationend', e => {
            isClick = true;
        })
    }
})

window.addEventListener('resize', e => {
    let x = slider.clientWidth
})