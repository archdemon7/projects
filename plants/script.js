const burgerBtn = document.querySelector('.header__burger-btn');
const burgerNav = document.querySelector('.header__burger-nav');
const burger = document.querySelector('.header__burger');
const link = document.querySelectorAll('.header__nav-link');
const overlay = document.querySelector('.burger-menu__averlay');

burgerBtn.addEventListener('click', e => {
    burger.classList.toggle('active');
    burgerBtn.classList.toggle('active-burger');
    burgerNav.classList.toggle('active');
})

link.forEach(e => {
    if (e.classList.contains('account')) {
        e.addEventListener('click', event => {
            burger.classList.remove('active');
            burgerBtn.classList.remove('active-burger');
            burgerNav.classList.remove('active');
        })
    }
})

overlay.addEventListener('click', e => {
    burger.classList.remove('active');
    burgerBtn.classList.remove('active-burger');
    burgerNav.classList.remove('active');
})

// 

const serviceButtons = document.querySelectorAll('.service__button');
const serviceCards = document.querySelectorAll('.service__card');
let counterActiveButtons = 0;

serviceButtons.forEach(button => {
    button.addEventListener('click', e => {
        if (counterActiveButtons == 0) {
            serviceCards.forEach(card => {
                card.classList.add('service__card-active')
            })
        }

        if (button.classList.contains('service__button-active')) {
            unActiveCard(button);
            button.classList.remove('service__button-active');
            counterActiveButtons -= 1;
        } else if (counterActiveButtons < 2) {
            button.classList.add('service__button-active');
            activeCard(button);
            counterActiveButtons += 1;
        }

        if (counterActiveButtons == 0) {
            serviceCards.forEach(card => {
                card.classList.remove('service__card-active')
            })
        }
    })
})


function activeCard(button) {
    if (button.classList.contains('service__button-active')
    && button.classList.contains('service__button-gardens')) {
        serviceCards.forEach(card => {
            if (card.classList.contains('service__card-garden')) {
                card.classList.remove('service__card-active');
            }
        })
    } else if (button.classList.contains('service__button-active')
            && button.classList.contains('service__button-lawn')) {
            serviceCards.forEach(card => {
                if (card.classList.contains('service__card-lawn')) {
                    card.classList.remove('service__card-active')
                }
            })
    } else if (button.classList.contains('service__button-active')
            && button.classList.contains('service__button-planting')) {
            serviceCards.forEach(card => {
                if (card.classList.contains('service__card-plantig')) {
                    card.classList.remove('service__card-active')
                }
            })
        }
}

function unActiveCard(button) {
    if (button.classList.contains('service__button-active')
    && button.classList.contains('service__button-gardens')) {
        serviceCards.forEach(card => {
            if (card.classList.contains('service__card-garden')) {
                card.classList.add('service__card-active')
            }
        })
    }  else if (button.classList.contains('service__button-active')
    && button.classList.contains('service__button-planting')) {
        serviceCards.forEach(card => {
            if (card.classList.contains('service__card-plantig')) {
                card.classList.add('service__card-active')
            }
        })
    } else if (button.classList.contains('service__button-active')
    && button.classList.contains('service__button-lawn')) {
        serviceCards.forEach(card => {
            if (card.classList.contains('service__card-lawn')) {
                card.classList.add('service__card-active')
            }
        })
    }
}

// 

const plans = document.querySelectorAll('.price__plan');
const plansInfo = document.querySelectorAll('.price__plans-info');
const plansButtons = document.querySelectorAll('.price__plans-button');
const plansTitle = document.querySelectorAll('.price__plan-title');
const priceIcons = document.querySelectorAll('.price__plans-icon-container');

function whatActive(planTitle) {
    if (planTitle.classList.contains('plan-basic')) {
        plans.forEach(plan => {
            if (plan.classList.contains('plan-basic')
            && plan.classList.contains('price__plan-active')) {
                plansInfo.forEach(planInfo => {
                    if (planInfo.classList.contains('plan-basic-info')
                    && planInfo.classList.contains('plans-info-active')) {
                        planInfo.classList.remove('plans-info-active');
                    }
                })
                plan.classList.remove('price__plan-active');
            } else if (plan.classList.contains('plan-basic')) {
                plan.classList.add('price__plan-active')
                plansInfo.forEach(planInfo => {
                    if (planInfo.classList.contains('plan-basic-info')
                    && !planInfo.classList.contains('price__plan-active')) {
                        planInfo.classList.add('plans-info-active')
                    }
                })
            }
        })
    }
    if (planTitle.classList.contains('plan-standart')) {
        plans.forEach(plan => {
            if (plan.classList.contains('plan-standart')
            && plan.classList.contains('price__plan-active')) {
                plansInfo.forEach(planInfo => {
                    if (planInfo.classList.contains('plan-standart-info')
                    && planInfo.classList.contains('plans-info-active')) {
                        planInfo.classList.remove('plans-info-active');
                    }
                })
                plan.classList.remove('price__plan-active');
            } else if (plan.classList.contains('plan-standart')) {
                plan.classList.add('price__plan-active')
                plansInfo.forEach(planInfo => {
                    if (planInfo.classList.contains('plan-standart-info')
                    && !planInfo.classList.contains('price__plan-active')) {
                        planInfo.classList.add('plans-info-active')
                    }
                })
            }
        })
    }
    if (planTitle.classList.contains('plan-pro')) {
        plans.forEach(plan => {
            if (plan.classList.contains('plan-pro')
            && plan.classList.contains('price__plan-active')) {
                plansInfo.forEach(planInfo => {
                    if (planInfo.classList.contains('plan-pro-info')
                    && planInfo.classList.contains('plans-info-active')) {
                        planInfo.classList.remove('plans-info-active');
                    }
                })
                plan.classList.remove('price__plan-active');
            } else if (plan.classList.contains('plan-pro')) {
                plan.classList.add('price__plan-active')
                plansInfo.forEach(planInfo => {
                    if (planInfo.classList.contains('plan-pro-info')
                    && !planInfo.classList.contains('price__plan-active')) {
                        planInfo.classList.add('plans-info-active')
                    }
                })
            }
        })
    }
}


plansTitle.forEach(planTitle => {
    planTitle.addEventListener('click', e => {
        if (planTitle.classList.contains('active')) {
            planTitle.classList.remove('active');
            priceIcons.forEach(priceIcon => {
                priceIcon.classList.remove('contacts__city-icon-container-act')
            })
            whatActive(planTitle);
        } else {
            plansTitle.forEach(pT => {
                pT.classList.remove('active');
            })
            plans.forEach(plan => {
                plan.classList.remove('price__plan-active')
            })
            plansInfo.forEach(planInfo => {
                planInfo.classList.remove('plans-info-active')
            })
            planTitle.classList.add('active');
            priceIcons.forEach(priceIcon => {
                priceIcon.classList.remove('contacts__city-icon-container-act')
            })
            rotateIconBasis(planTitle);
            rotateIconStandart(planTitle)
            rotateIconPro(planTitle)
            whatActive(planTitle);
        }
    })
})

function rotateIconBasis(planTitle) {
    priceIcons.forEach(priceIcon => {
        if (planTitle.classList.contains('plan-basic')
        && planTitle.classList.contains('active')
        && priceIcon.classList.contains('plan-basic')) {
            priceIcon.classList.add('contacts__city-icon-container-act');
        }
    })
}
function rotateIconStandart(planTitle) {
    priceIcons.forEach(priceIcon => {
        if (planTitle.classList.contains('plan-standart')
        && planTitle.classList.contains('active')
        && priceIcon.classList.contains('plan-standart')) {
            priceIcon.classList.add('contacts__city-icon-container-act');
        }
    })
}
function rotateIconPro(planTitle) {
    priceIcons.forEach(priceIcon => {
        if (planTitle.classList.contains('plan-pro')
        && planTitle.classList.contains('active')
        && priceIcon.classList.contains('plan-pro')) {
            priceIcon.classList.add('contacts__city-icon-container-act');
        }
    })
}


// 

const contactsCity = document.querySelector('.contacts__city');
const dropdownList = document.querySelector('.dropdown-list');
const dropdownItems = document.querySelectorAll('.dropdown-item');
const contactsInfo = document.querySelector('.contacts__info');
const listTitle = document.querySelector('.contacts__city-list');

const city = document.querySelector('.city');
const phone = document.querySelector('.phone');
const adress = document.querySelector('.adress');


contactsCity.addEventListener('click', e => {
    dropdownList.classList.toggle('dropdown-list-active');
})

dropdownItems.forEach(dropdownItem => {
    dropdownItem.addEventListener('click', e => {
        if (dropdownItem.classList.contains('canandaigua')) {
            addCity(canandaigua);
        } else if (dropdownItem.classList.contains('new-york')) {
            addCity(newYork);
        } else if (dropdownItem.classList.contains('yonkers')) {
            addCity(yonkers);
        } else if (dropdownItem.classList.contains('sherrill')) {
            addCity(sherrill);
        }
        dropdownList.classList.toggle('dropdown-list-active');
        contactsInfo.classList.add('contacts__info-active');
    })
})

const canandaigua = {
    city: 'Canandaigua, NY',
    phone: '+1 585 393 0001',
    adress: '151 Charlotte Street'
}

const newYork = {
    city: 'New York City',
    phone: '+1 212 456 0002',
    adress: '9 East 91st Street'
}

const sherrill = {
    city: 'Sherrill, NY',
    phone: '+1 315 908 0004',
    adress: '14 WEST Noyes BLVD'
}

const yonkers = {
    city: 'Yonkers, NY',
    phone: '+1 914 678 0003',
    adress: '511 Warburton Ave'
}

function addCity(cityName) {
    listTitle.innerHTML = cityName.city
    city.innerHTML = cityName.city;
    phone.innerHTML = cityName.phone;
    adress.innerHTML = cityName.adress;
}
