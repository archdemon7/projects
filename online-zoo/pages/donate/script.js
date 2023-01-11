// BURGER MENU
const burgerMenuBtn = document.querySelector('.burger-menu__btn');
const burgerMenu = document.querySelector('.burger-menu');
const burgerLink = document.querySelectorAll('.burger-menu__link');
const burgerOverlay = document.querySelector('.burger-menu__averlay');

burgerMenuBtn.addEventListener('click', e => {
    burgerMenu.classList.toggle('burger_active');
});
burgerLink.forEach((el) => el.addEventListener('click', e => {
    burgerMenu.classList.toggle('burger_active');
}));
burgerOverlay.addEventListener('click', e => {
    burgerMenu.classList.toggle('burger_active');
});
// DONATU
const sliderInputs = document.querySelectorAll('.peek-feed__slider-input');
const sliderLabels = document.querySelectorAll('.slider-label');
const peekFeedInput = document.querySelector('.peek-feed__form-input');

sliderInputs.forEach((sliderInput) => {
    if(sliderInput.checked) {
        peekFeedInput.value = sliderInput.id;
    }
})
peekFeedInput.addEventListener('click', () => {
    peekFeedInput.value = '';
})


sliderInputs.forEach((sliderInput) => {
    sliderInput.addEventListener('click', () => {
        peekFeedInput.value = sliderInput.id;
        sliderLabels.forEach((sliderLabel) => {
            sliderLabel.classList.remove('active');
            if (sliderLabel.previousElementSibling.id == sliderInput.id) {
                sliderLabel.classList.add('active');
            };
        });
    });
});

peekFeedInput.addEventListener('input', function() {
    sliderInputs.forEach((sliderInput) => {
        if (sliderInput.id != this.value) {
            sliderInput.checked = false;
            sliderLabels.forEach((sliderLabel) => {
                if (sliderLabel.previousElementSibling.id == sliderInput.id) {
                    sliderLabel.classList.remove('active');
                };
            });
        } else if (this.value == sliderInput.id) {
            sliderInput.checked = true;
            sliderLabels.forEach((sliderLabel) => {
                if (sliderLabel.previousElementSibling.id == sliderInput.id) {
                    sliderLabel.classList.add('active');
                };
            });
        };
    });
})

peekFeedInput.oninput = function() {
    this.value = this.value.substr(0, 4);
}