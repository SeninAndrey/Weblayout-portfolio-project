const myWidth = window.screen.width;

// hero dropdown

const dropdownElem = document.querySelectorAll('.dropdown__simplebar');
dropdownElem.forEach(dropdown => {
    new SimpleBar(dropdown, {
        autoHide: false,
        scrollbarMaxSize: 25,
    });
})
const dropdownBtns = document.querySelectorAll('.menu__btn');
const dropdowns = document.querySelectorAll('.dropdown');
const activeClassdropdowns = 'dropdown__active';
const activeClassbtns = 'btn__active';

dropdownBtns.forEach(item => {
    item.addEventListener('click', function() {
        let DropThis = this.parentElement.querySelector('.dropdown');
        dropdowns.forEach(elem => {
            if (elem != DropThis) {
                elem.classList.remove(activeClassdropdowns)
            }
        });
        dropdownBtns.forEach(elem => {
            if (elem != this) {
                elem.classList.remove(activeClassbtns)
            }
        });
        DropThis.classList.toggle(activeClassdropdowns);
        this.classList.toggle(activeClassbtns);
    });
})

// tooltips

tippy('[data-tippy-content]', {
    arrow: true,
    // trigger: 'focusin',
    // trigger: 'click',
    touch: 'true',
    hideOnClick: 'toggle',
    maxWidth: 240,
    theme: 'blahchard-theme',
});

// burger menu

document.querySelector(".header__burger").addEventListener("click", function() {
    document.querySelector(".burger__menu").classList.add("burger__menu--active");
    document.querySelector("body").style.overflow = "hidden";
})
document.querySelector(".burger__close").addEventListener("click", function() {
    document.querySelector(".burger__menu").classList.remove("burger__menu--active");
    document.querySelector("body").style.overflow = "scroll";
})
const navLinks = document.querySelectorAll(".nav__link");
navLinks.forEach(navLink => navLink.addEventListener("click", function() {
    document.querySelector(".burger__menu").classList.remove("burger__menu--active");
    document.querySelector("body").style.overflow = "scroll";
}))

// searching menu

document.querySelector(".header__search-open").addEventListener("click", function() {
    document.querySelector(".header__search-open").style.visibility = "hidden";
    document.querySelector(".header__search").classList.add("header__search--active");
    this.classList.add("active");
    document.querySelector(".search__input").placeholder = '';
    if ((myWidth < 992) && (myWidth > 575)) {
        // console.log(myWidth);
        document.querySelector(".logo").style.visibility = "hidden";
        document.querySelector(".header__burger").style.visibility = "hidden";
    }
})

document.querySelector(".search__close").addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(".header__search").classList.remove("header__search--active");
    document.querySelector(".search__input").value = '';
    document.querySelector(".header__search-open").style.visibility = "visible";
    document.querySelector(".logo").style.visibility = "visible";
    document.querySelector(".header__burger").style.visibility = "visible";
})

// document.addEventListener("click", function(e) {
//     let target = e.target;
//     let form = document.querySelector(".header__search");
//     if (!target.closest(".header__search-open")) {
//         form.classList.remove("header__search--active");
//         document.querySelector(".header__search-open").style.visibility = "visible";
//         // form.querySelector("search__input").value = "";
//         document.querySelector(".header__search-open").classList.remove("active")
//     }
// })

// hero slider

const swiperHero = new Swiper('.hero__swiper', {
    slidesPerView: 1,
    spaceBetween: 10,
    speed: 2000,
    autoplay: {
        delay: 2000
    },
    effect: "fade",
    allowTouchMove: false,
})

// gallery slider

const swiperGallery = new Swiper('.gallery__swiper', {
    // spaceBetween: 50, 
    // slidesPerView: 3,
    // slidesPerGroup: 3,
    navigation: {
        nextEl: ".gallery__slider-right",
        prevEl: ".gallery__slider-left"
    },
    pagination: {
        el: ".gallery__swiper-pagination",
        type: "fraction",
    },
    allowTouchMove: false,
    breakpoints: {
        320: {
            slidesPerView: 1,
            slidesPerGroup: 1,
            // spaceBetween: 50,
        },
        576: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            spaceBetween: 34,
        },
        1500: {
            slidesPerView: 3,
            slidesPerGroup: 3,
            spaceBetween: 50,
        }
    },
    a11y: false,
    keyboard: {
        enabled: true,
        onlyInViewport: true,
    },
})

// events slider

const swiperEvents = new Swiper('.events__swiper', {
    slidesPerGroup: 1,
    navigation: {
        nextEl: ".events__slider-right",
        prevEl: ".events__slider-left"
    },
    pagination: {
        el: ".events__swiper-pagination",
        type: "bullets",
        clickable: true
    },
    allowTouchMove: true,
    breakpoints: {
        320: {
            slidesPerView: 1,
            // slidesPerGroup: 1,
            // spaceBetween: 50,
        },
        768: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            spaceBetween: 34,
        },
        992: {
            slidesPerView: 3,
            slidesPerGroup: 3,
            spaceBetween: 27,
        },
        1500: {
            slidesPerView: 3,
            spaceBetween: 50,
        }
    },
    a11y: false,
    keyboard: {
        enabled: true,
        onlyInViewport: true,
    },
})

// projects slider

const swiperProjects = new Swiper('.projects__swiper', {
    // spaceBetween: 50,
    // slidesPerView: 3,
    // slidesPerGroup: 3,
    navigation: {
        nextEl: ".projects__slider-right",
        prevEl: ".projects__slider-left"
    },
    // pagination: {
    //     el: ".projects__swiper-pagination",
    //     type: "fraction",
    // },
    allowTouchMove: true,
    breakpoints: {
        320: {
            slidesPerView: 1,
            slidesPerGroup: 1,
            spaceBetween: 250,

        },
        576: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            spaceBetween: 34,
        },
        992: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            spaceBetween: 50,
        },
        1400: {
            slidesPerView: 3,
            slidesPerGroup: 3,
            spaceBetween: 50,
        }
    },
    a11y: false,
    keyboard: {
        enabled: true,
        onlyInViewport: true,
    },
})

// gallery select

const selectFunc = () => {
    const element = document.querySelector('.gallery__select');

    const choices = new Choices(element, {
        searchEnabled: false,
        itemSelectText: '',
    });
    // убираем подсвеченность пунктов дропдауна
    const choicesInner = document.querySelector('.choices__list');
    choicesInner.addEventListener('click', () => {
        const choicesHighlighted = document.querySelector('.is-highlighted');
        if (choicesHighlighted !== null) {
            choicesHighlighted.classList.remove('is-highlighted');
        }
    })
}
selectFunc();

//accordion

new Accordion('.accordion__list', {
    elementClass: 'accordion__item',
    triggerClass: 'accordion__control',
    panelClass: 'accordion__content',
    activeClass: 'accordion--active',
    collapsible: true,
    active: false,
    heightStyle: "content"
});

// tabs 

let tabsBtn = document.querySelectorAll('.accordion__content-item');
let tabsItem = document.querySelectorAll('.tab__item');

tabsBtn.forEach(function(elem) {
    elem.addEventListener('click', function(e) {
        // tab-0 - "заглушка"
        const path = (e.currentTarget.dataset.path != 'tab-0') ? (e.currentTarget.dataset.path) : 'tab-0';

        tabsBtn.forEach(function(btn) {
            btn.classList.remove('accordion__content-item--active');
        });
        e.currentTarget.classList.add('accordion__content-item--active');

        tabsItem.forEach(function(elem) {
            elem.classList.remove('tab__item--active');
        })
        const currentTabItem = document.querySelector(`[data-target="${path}"]`);
        currentTabItem.classList.add('tab__item--active');
        // скролл до Художника на мобильных устройствах
        if (myWidth < 576) {
            currentTabItem.scrollIntoView({ block: "center" });
        };
    })
})

// form mask and validate

const phoneInput = document.querySelector("input[type='tel']");
const fioInput = document.querySelector("input[name='contacts-name']");
const phoneMask = new Inputmask("+7 (999) 999 99 99");
const contactsInput = document.querySelectorAll(".contacts__input");

// contactsInput.forEach(inputItem => {
//     inputItem.addEventListener('input', function() {
//         inputItem.placeholder = '';
//     });
// });

phoneMask.mask(phoneInput);

new JustValidate('.contacts__form', {
    rules: {
        name: {
            required: true,
            minLength: 2,
            maxLength: 25,
            function: () => {
                const reg = /^[а-яА-ЯёЁa-zA-z ]+$/;
                const fioStr = fioInput.value;
                return reg.test(fioStr);
            }
        },
        tel: {
            required: true,
            function: () => {
                const phone = phoneInput.inputmask.unmaskedvalue()
                return Number(phone) && phone.length === 10
            }
        }
    },
    messages: {
        name: {
            required: 'Укажите ваше имя',
            minLength: 'Не корректное имя',
            maxLength: 'Не корректное имя',
            function: 'Недопустимые символы в имени'

        },
        tel: {
            required: 'Укажите ваш телефон',
            function: 'Не корректный номер телефона'
        }
    },
})

// map
// Функция ymaps.ready() будет вызвана, когда
// загрузятся все компоненты API, а также когда будет готово DOM-дерево.
ymaps.ready(init);

function init() {
    // Создание карты.
    let myMap = new ymaps.Map("contacts__map", {
        // Координаты центра карты.
        // Порядок по умолчанию: «широта, долгота».
        center: [55.760624, 37.614746],
        // Уровень масштабирования. Доп
        zoom: 14,
    });
    // запрещаем скролл
    myMap.behaviors.disable('scrollZoom');
    // Убираем элементы управления на карте
    myMap.controls.remove('searchControl');
    myMap.controls.remove('trafficControl');
    myMap.controls.remove('typeSelector');
    myMap.controls.remove('fullscreenControl');
    myMap.controls.remove('rulerControl');
    // находим локацию по координатам
    var myGeoObject = new ymaps.GeoObject({
        geometry: {
            type: "Point", // тип геометрии - точка
            coordinates: [55.760624, 37.614746] // координаты точки
        }
    });
    // стилиуем маркер
    var myPlacemark = new ymaps.Placemark([55.760624, 37.614746], {}, {
        iconLayout: 'default#image',
        iconImageHref: '../img/placemark.svg',
        iconImageSize: [20, 20],
        iconImageOffset: [0, 0]
    });
    // Размещение гео-объекта на карте.
    myMap.geoObjects.add(myPlacemark);
}

// MODAL

document.addEventListener('DOMContentLoaded', () => {
    const openButton = document.querySelector('.js-open-modal');
    const modal = document.querySelector(openButton.dataset.target);
    const modalWindow = document.querySelector('.modal__window');
    const modalClose = document.querySelector('.modal__close');
    const body = document.querySelector("body");

    openButton.addEventListener('click', () => {
        modal.style.display = 'block';
        document.querySelector("body").style.overflow = "hidden";
    });

    modalWindow.addEventListener('click', event => {
        event._isClickOnModal = true;
    });

    modal.addEventListener('click', event => {
        if (event._isClickOnModal) return;
        modal.style.display = 'none';
        body.style.overflow = "scroll";
    });

    modalClose.addEventListener('click', () => {
        modal.style.display = 'none';
        body.style.overflow = "scroll";
    })
})