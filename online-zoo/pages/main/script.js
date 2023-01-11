const burgerMenuBtn = document.querySelector('.burger-menu__btn');
const burgerMenu = document.querySelector('.burger-menu');
const burgerLink = document.querySelectorAll('.burger-menu__link');
const burgerOverlay = document.querySelector('.burger-menu__averlay')

burgerMenuBtn.addEventListener('click', e => {
    burgerMenu.classList.toggle('burger_active');
});
burgerLink.forEach((el) => el.addEventListener('click', e => {
    burgerMenu.classList.toggle('burger_active');
}));
burgerOverlay.addEventListener('click', e => {
    burgerMenu.classList.toggle('burger_active');
});

// POPUP

const testimonialsItems = document.querySelectorAll('.testimonials__card');
const testimonialsPopUp = document.querySelector('.testimonials-popup');
const popUpAverlay = document.querySelector('.popup__averlay');
const popUpClose = document.querySelector('.popup__close');
testimonialsItems.forEach((el) => el.addEventListener('click', e => {
    if(document.documentElement.clientWidth <= 640) {
        testimonialsPopUp.classList.toggle('popup-active');
        popUpAverlay.classList.toggle('popup-active');
    }
}));
popUpAverlay.addEventListener('click', e => {
    if(document.documentElement.clientWidth <= 640) {
        testimonialsPopUp.classList.toggle('popup-active');
        popUpAverlay.classList.toggle('popup-active');
    }
});
popUpClose.addEventListener('click', e => {
    if(document.documentElement.clientWidth <= 640) {
        testimonialsPopUp.classList.toggle('popup-active');
        popUpAverlay.classList.toggle('popup-active');
    }
});
// POPUP

// TESTIMONIALS SLIDER

const inputTestimonials = document.querySelector('.testimonials__progressbar-cursor');
const testimonialsCards = document.querySelector('.testimonials__cards');

inputTestimonials.addEventListener('change', e => {
    if(document.documentElement.clientWidth >= 1251) {
        testimonialsCards.style.left = `${inputTestimonials.value * (-297)}px`
    } else if (document.documentElement.clientWidth >= 1000) {
        testimonialsCards.style.left = `${inputTestimonials.value * (-323)}px`
    }
})

//PETS SLIDER

const leftArrow = document.querySelector('.pets__arrow-left');
const rightArrow = document.querySelector('.pets__arrow-right');
const leftItem = document.querySelector('#left');
const rightItem = document.querySelector('#right');
const activeItem = document.querySelector('#current');
const petsContainers = document.querySelector('.pets__containers');
var isClick = true;

function randomInteger(min, max) {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
  }

const deleteLeftElem = function() {
    leftItem.className = `pets__container`;
}
const deleteActiveElem = function() {
    activeItem.className = `pets__container`;
}
const deleteRightElem = function() {
    rightItem.className = `pets__container`;
}

rightArrow.addEventListener('click', () => {
    if (isClick) {
        deleteRightElem();
        isClick = false;
        let randomInt = randomInteger(1,7);
        rightItem.classList.add(`change${randomInt}`);
        petsContainers.classList.add('get-right');
        petsContainers.addEventListener('animationend', () => {
            deleteActiveElem()
            rightArrow
            activeItem.classList.add(`change${randomInt}`);
            petsContainers.classList.remove('get-right');
            petsContainers.classList.remove('get-left');
            isClick = true;
        })
    }
})
leftArrow.addEventListener('click', () => {
    if (isClick) {
        deleteLeftElem()
        isClick = false;
        let randomInt = randomInteger(1,7);
        leftItem.classList.add(`change${randomInt}`);
        petsContainers.classList.add('get-left');
        petsContainers.addEventListener('animationend', () => {
            deleteActiveElem()
            activeItem.classList.add(`change${randomInt}`);
            petsContainers.classList.remove('get-right');
            petsContainers.classList.remove('get-left');
            isClick = true;
        });
    }
})
