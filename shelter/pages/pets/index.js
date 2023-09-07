import {pets} from '../../assets/js/pets.js';

const sliderContainer = document.querySelector('.slider-container');
let indexes = [0, 1, 2, 3, 4, 5, 6, 7];
let resultArray = [[],[],[],[]];

function shuffle(array) {
    let arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr
}
for (let i = 0; i < 3; i++) {
  let subArray = [...shuffle(indexes)];
  while (subArray.length > 0) {
    if (resultArray[i].length < 6){
      if (resultArray[i].includes(subArray[subArray.length - 1])) {
        subArray = [...shuffle(subArray)];
      } else {
        resultArray[i].push(subArray.pop());
      }
    } else {
      resultArray[i+1].push(subArray.pop());
    }
  }
}
let arr = [];
resultArray.forEach(e => {
  arr = arr.concat(e)
})

let reverseArr = arr.reverse();
let full = arr.concat(reverseArr);

resultArray = [[],[],[],[],[],[]]

for(let i = 0; i < 6; i++) {
  while (resultArray[i].length < 8) {
    resultArray[i].push(full.pop())
  }
}

let slider;

function createCard(index) {
    const sliderItem = document.createElement('div');
    sliderItem.classList.add('slider-item');
    sliderItem.setAttribute('cardid', index);
    slider.append(sliderItem);

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

function drwaSlider() {
    resultArray.forEach((el, index) => {
        slider = document.createElement('div');
        slider.classList.add('slider');
        if (index == 0) {
            slider.classList.add('active')
        };
        el.forEach(e => {
            createCard(e);
        })
        sliderContainer.append(slider);
    })
}

drwaSlider()

function sliders() {
    return document.querySelectorAll('.slider');
}


const rightButton = document.querySelector('.button-right');
const leftButton = document.querySelector('.button-left');
const allRightButton = document.querySelector('.button-allright');
const allLeftButton = document.querySelector('.button-allleft');
const buttonNumber = document.querySelector('.button-number');

function activeSlide() {
    sliders()[sliders().length - 1].classList.add('active');
    buttonNumber.innerHTML = sliders().length;
}

function checkButtons() {
    let number = +buttonNumber.textContent;
    if (number == sliders().length){
        rightButton.classList.remove('active');
        allRightButton.classList.remove('active');
        rightButton.classList.add('inactive');
        allRightButton.classList.add('inactive');
    } else {
        rightButton.classList.add('active');
        allRightButton.classList.add('active');
        rightButton.classList.remove('inactive');
        allRightButton.classList.remove('inactive');
    }
    if (number == 1) {
        leftButton.classList.remove('active');
        allLeftButton.classList.remove('active');
        leftButton.classList.add('inactive');
        allLeftButton.classList.add('inactive');
    } else {
        leftButton.classList.remove('inactive');
        allLeftButton.classList.remove('inactive');
        leftButton.classList.add('active');
        allLeftButton.classList.add('active');
    }
}

allRightButton.addEventListener('click', e => {
    sliders().forEach(el => {
        el.classList.remove('active');
    })
    sliders()[sliders().length - 1].classList.add('active');
    buttonNumber.innerHTML = sliders().length;
    checkButtons();
})

rightButton.addEventListener('click', e => {
    if (!sliders()[sliders().length-1].classList.contains('active')) {
        for (let i = 0; i < sliders().length; i++) {
            if (sliders()[i].classList.contains('active')) {
                sliders()[i].classList.remove('active');
                sliders()[i+1].classList.add('active');
                buttonNumber.innerHTML = i + 2;
                break
            }
        }
        checkButtons();
    }
})

allLeftButton.addEventListener('click', e => {
    sliders().forEach(el => {
        el.classList.remove('active');
    })
    sliders()[0].classList.add('active');
    buttonNumber.innerHTML = 1;
    checkButtons();
})

leftButton.addEventListener('click', e => {
    if (!sliders()[0].classList.contains('active')){
        for (let i = 0; i < sliders().length; i++) {
            if (sliders()[i].classList.contains('active')) {
                sliders()[i].classList.remove('active');
                sliders()[i-1].classList.add('active');
                buttonNumber.innerHTML = i;
                break
            }
        }
        checkButtons();
    }
})

window.addEventListener('resize', e => {
    if (window.innerWidth <= '768' && window.innerWidth > '380'){
        if (sliders().length < 8){
            while (sliders().length < 8) {
                slider = document.createElement('div');
                slider.classList.add('slider');
                sliderContainer.append(slider);
            }
            for (let i = 0; i < sliders().length - 1; i ++){
                while (sliders()[i].children.length > 6) {
                    let delCard = sliders()[i].removeChild(sliders()[i].lastChild);
                    sliders()[i+1].insertBefore(delCard, sliders()[i+1].firstChild);
                }
            }
            checkButtons()
        } else if (sliders().length > 8) {
            for (let i = sliders().length - 1; i > 7; i--) {
                while (sliders()[i].children.length > 0) {
                    let delCard = sliders()[i].removeChild(sliders()[i].firstChild);
                    sliders()[i-1].appendChild(delCard);
                }
                if (sliders()[i].classList.contains('active')) {
                    sliders()[i].remove()
                    activeSlide()
                } else {
                    sliders()[i].remove()
                }
                checkButtons()
            }
            for (let i = sliders().length - 1; i > -1; i--) {
                while (sliders()[i].children.length > 6) {
                    let delCard = sliders()[i].removeChild(sliders()[i].firstChild);
                    sliders()[i-1].appendChild(delCard);
                }
            }
        }
    } else if (window.innerWidth <= '380') {
        if (sliders().length < 16) {
            while (sliders().length < 16) {
                slider = document.createElement('div');
                slider.classList.add('slider');
                sliderContainer.append(slider);
            }
            for (let i = 0; i < sliders().length - 1; i ++){
                while (sliders()[i].children.length > 3) {
                    let delCard = sliders()[i].removeChild(sliders()[i].lastChild);
                    sliders()[i+1].insertBefore(delCard, sliders()[i+1].firstChild);
                }
            }
            checkButtons()
        }
    } else if (window.innerWidth > '768') {
        if (sliders().length > 6) {
            for (let i = sliders().length - 1; i > 5; i--) {
                while (sliders()[i].children.length > 0) {
                    let delCard = sliders()[i].removeChild(sliders()[i].firstChild);
                    sliders()[i-1].appendChild(delCard);
                }
                if (sliders()[i].classList.contains('active')) {
                    sliders()[i].remove()
                    activeSlide()
                } else {
                    sliders()[i].remove()
                }
                checkButtons()
            }
            for (let i = sliders().length - 1; i > -1; i--) {
                while (sliders()[i].children.length > 8) {
                    let delCard = sliders()[i].removeChild(sliders()[i].firstChild);
                    sliders()[i-1].appendChild(delCard);
                }
            }
            checkButtons()
        }
    }
})