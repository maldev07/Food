/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/script.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/modules/calc.js":
/*!****************************!*\
  !*** ./js/modules/calc.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function calc() {
   const result = document.querySelector('.calculating__result span');
   let sex, height, weight, age, ratio;

   if (localStorage.getItem('sex')) {
      sex = localStorage.getItem('sex');
   } else {
      sex = 'female';
      localStorage.setItem('sex', 'female');
   }

   if (localStorage.getItem('ratio')) {
      ratio = localStorage.getItem('ratio');
   } else {
      ratio = 1.375;
      localStorage.setItem('ratio', 'female');
   }

   initLocalItems('#gender div', 'calculating__choose-item_active');
   initLocalItems('.calculating__choose_big div', 'calculating__choose-item_active');

   function initLocalItems(selector, activeClass) {
      const elements = document.querySelectorAll(selector);

      elements.forEach(elem => {
         elem.classList.remove(activeClass);
         if (elem.getAttribute('id') === localStorage.getItem('sex')) {
            elem.classList.add(activeClass);
         }
         if (elem.getAttribute('data-ratio') === localStorage.getItem('ratio')) {
            elem.classList.add(activeClass);
         }

      });
   }

   function calcTotal() {
      if (!sex || !height || !weight || !age || !ratio) {
         result.textContent = '____';
         return;
      }

      if (sex === 'female') {
         result.textContent = Math.round((447.6 + (9.2 * weight) + (3.1 * height) - (4.3 * age)) * ratio);
      } else {
         result.textContent = Math.round((88.36 + (13.4 * weight) + (4.8 * height) - (5.7 * age)) * ratio);
      }
   }
   calcTotal();

   function getStaticInformation(selector, activeClass) {
      const elements = document.querySelectorAll(selector);

      elements.forEach(elem => {
         elem.addEventListener('click', (e) => {

            if (e.target.getAttribute('data-ratio')) {
               ratio = +e.target.getAttribute('data-ratio');
               localStorage.setItem('ratio', ratio);
            } else {
               sex = e.target.getAttribute('id');
               localStorage.setItem('sex', sex);
            }


            elements.forEach(elem => {
               elem.classList.remove(activeClass);
            });

            e.target.classList.add(activeClass);
            calcTotal();
         });
      });
   }


   getStaticInformation('#gender div', 'calculating__choose-item_active');
   getStaticInformation('.calculating__choose_big div', 'calculating__choose-item_active');

   function getDynamicInformation(selector) {
      const input = document.querySelector(selector);

      input.addEventListener('input', () => {

         if (input.value.match(/\D/i)) {
            input.style.border = '1px solid red';
         } else {
            input.style.border = 'none';
         }
         switch (input.getAttribute('id')) {
            case 'height':
               height = +input.value;
               break;
            case 'weight':
               weight = +input.value;
               break;
            case 'age':
               age = +input.value;
               break;
         }
         calcTotal();
      });
   }

   getDynamicInformation('#weight');
   getDynamicInformation('#height');
   getDynamicInformation('#age');
}

/* harmony default export */ __webpack_exports__["default"] = (calc);

/***/ }),

/***/ "./js/modules/cards.js":
/*!*****************************!*\
  !*** ./js/modules/cards.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/services */ "./js/services/services.js");


function cards() {
   class MenuCard {
      constructor(src, alt, title, description, price, parentSelector, ...clases) {
         this.src = src;
         this.alt = alt;
         this.title = title;
         this.description = description;
         this.price = price;
         this.clases = clases;
         this.parent = document.querySelector(parentSelector);
         this.transfer = 78;
         this.changeToRUB();
      }

      changeToRUB() {
         this.price = +this.price * this.transfer;
      }

      render() {
         const element = document.createElement('div');
         if (this.clases.length === 0) {
            this.element = 'menu__item';
            element.classList.add((this.element));
         } else {
            this.clases.forEach(className => element.classList.add(className));
         }
         element.innerHTML = `
               <img src=${this.src} alt=${this.alt}>
               <h3 class="menu__item-subtitle">${this.title}</h3>
            <div class="menu__item-descr">${this.description}</div>
            <div class="menu__item-divider"></div>
               <div class="menu__item-price">
                  <div class="menu__item-cost">Цена:</div>
                  <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
               </div>
         `;
         this.parent.append(element);
      }
   }



   //! Формирует верстку с помощью шаблонов и json(backend)
   Object(_services_services__WEBPACK_IMPORTED_MODULE_0__["getResource"])('http://localhost:3000/menu')
      .then(data => {
         data.forEach(({
            img,
            altimg,
            title,
            descr,
            price
         }) => {
            new MenuCard(img, altimg, title, descr, price, '.menu .container').render();
         });
      });
}

/* harmony default export */ __webpack_exports__["default"] = (cards);

/***/ }),

/***/ "./js/modules/forms.js":
/*!*****************************!*\
  !*** ./js/modules/forms.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal */ "./js/modules/modal.js");
/* harmony import */ var _services_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/services */ "./js/services/services.js");



function forms(formSelector, modalTimerId) {
   const form = document.querySelectorAll(formSelector);
   const message = {
      loading: 'img/form/5.2 spinner.svg',
      success: 'Success',
      fail: 'Failed'
   };

   form.forEach(item => {
      bindPostDate(item);
   });

   function bindPostDate(form) {

      form.addEventListener('submit', event => {
         event.preventDefault();

         const messageStatus = document.createElement('img');

         messageStatus.src = message.loading;
         messageStatus.style.cssText = `
               display: block;
               margin: 0 auto;
            `;


         form.insertAdjacentElement('afterend', messageStatus);

         const formData = new FormData(form);

         messageStatus.textContent = message.loading;

         const json = JSON.stringify(Object.fromEntries(formData.entries()));

         postData('http://localhost:3000/requests', json)
            .then(data => {
               console.log(data);
               showThanksModal(message.success);
               messageStatus.remove();
            }).catch(() => {
               showThanksModal(message.fail);
            }).finally(() => {
               form.reset();
            });

      });
   }

   function showThanksModal(message) {
      const prevModalDialog = document.querySelector('.modal__dialog');

      prevModalDialog.classList.add('hide');
      Object(_modal__WEBPACK_IMPORTED_MODULE_0__["openModal"])('.modal', modalTimerId);

      const thanksModal = document.createElement('div');
      thanksModal.classList.add('modal__dialog');

      thanksModal.innerHTML = `
      <div class="modal__content">
         <div class = "modal__close" data-close>&times;</div>
         <div class="modal__title">${message}</div>
      </div>
      `;
      document.querySelector('.modal').append(thanksModal);
      setTimeout(() => {
         thanksModal.remove();
         prevModalDialog.classList.add('show');
         prevModalDialog.classList.remove('hide');
         Object(_modal__WEBPACK_IMPORTED_MODULE_0__["closeModal"])('.modal');
      }, 4000);
   }
}

/* harmony default export */ __webpack_exports__["default"] = (forms);

/***/ }),

/***/ "./js/modules/modal.js":
/*!*****************************!*\
  !*** ./js/modules/modal.js ***!
  \*****************************/
/*! exports provided: default, openModal, closeModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openModal", function() { return openModal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "closeModal", function() { return closeModal; });
function openModal(modalSelector, modalTimerId) {
   const modal = document.querySelector(modalSelector);
   modal.classList.add('show');
   modal.classList.remove('hide');
   document.body.style.overflow = 'hidden';
   console.log(modalTimerId);
   if (modalTimerId) {
      clearInterval(modalTimerId);
   }

}

function closeModal(modalSelector) {
   const modal = document.querySelector(modalSelector);
   modal.classList.remove('show');
   modal.classList.add('hide');
   document.body.style.overflow = '';
}


function modal(triggerSelector, modalSelector, modalTimerId) {
   const modalTrigger = document.querySelectorAll(triggerSelector),
      modal = document.querySelector(modalSelector);

   modalTrigger.forEach(item => {
      item.addEventListener('click', () => openModal(modalSelector, modalTimerId));
   });


   modal.addEventListener('click', event => {
      if (event.target === modal || event.target.getAttribute('data-close') == '') {
         closeModal(modalSelector);
      }
   });

   document.addEventListener('keydown', (event) => {
      if (event.code === 'Escape' && modal.classList.contains('show')) {
         closeModal(modalSelector);
      }
   });




   function showModalByScroll() {
      if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
         openModal(modalSelector, modalTimerId);
         window.removeEventListener('scroll', showModalByScroll);

      }
   }

   window.addEventListener('scroll', showModalByScroll);
}

/* harmony default export */ __webpack_exports__["default"] = (modal);


/***/ }),

/***/ "./js/modules/slider.js":
/*!******************************!*\
  !*** ./js/modules/slider.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function slider({
   container,
   slide,
   nextArrow,
   prevArrow,
   totalCounter,
   currentCounter,
   wrapper,
   field
}) {

   const slides = document.querySelectorAll(slide),
      slider = document.querySelector(container),
      leftArrow = document.querySelector(prevArrow),
      rightArrow = document.querySelector(nextArrow),
      total = document.querySelector(totalCounter),
      current = document.querySelector(currentCounter),
      slidesWrapper = document.querySelector(wrapper),
      slidesField = document.querySelector(field),
      width = window.getComputedStyle(slidesWrapper).width;
   let slideIndex = 1;

   let offset = 0;
   if (slides.length < 10) {
      total.textContent = `0${slides.length}`;
      current.textContent = `0${slideIndex}`;
   } else {
      total.textContent = `${slides.length}`;
      current.textContent = slideIndex;
   }


   slidesField.style.width = 100 * slides.length + '%';
   slidesField.style.display = 'flex';
   slidesField.style.transition = '0.7s all';

   slidesWrapper.style.overflow = 'hidden';

   slides.forEach(slide => {
      slide.style.width = width;
   });

   slider.style.position = 'relative';

   const indicators = document.createElement('ol'),
      dots = [];

   indicators.classList.add('carousel-indicators');
   indicators.style.cssText = `
   position: absolute;
   right: 0;
   bottom: 0;
   left: 0;
   z-index: 15;
   display: flex;
   justify-content: center;
   margin-right: 15%;
   margin-left: 15%;
   list-style: none;
`;
   slider.append(indicators);

   for (let i = 0; i < slides.length; i++) {
      const dot = document.createElement('li');
      dot.setAttribute('data-slide-to', i + 1);
      dot.style.cssText = `
      box-sizing: content-box;
      flex: 0 1 auto;
      width: 30px;
      height: 6px;
      margin-right: 3px;
      margin-left: 3px;
      cursor: pointer;
      background-color: #fff;
      background-clip: padding-box;
      border-top: 10px solid transparent;
      border-bottom: 10px solid transparent;
      opacity: .5;
      transition: opacity .6s ease;
   `;
      if (i == 0) {
         dot.style.opacity = 1;
      }
      indicators.append(dot);
      dots.push(dot);

   }



   function setOppacity() {
      dots.forEach(dot => dot.style.opacity = '.5');
      dots[slideIndex - 1].style.opacity = 1;
   }

   function rullsOfSlides() {
      if (slides.length < 10) {
         current.textContent = `0${slideIndex}`;
      } else {
         current.textContent = slideIndex;
      }
   }

   function slideIndexSet() {
      if (slideIndex == slides.length) {
         slideIndex = 1;
      } else {
         slideIndex++;
      }
   }

   rightArrow.addEventListener('click', () => {
      if (offset == deleteNotDigits(width) * (slides.length - 1)) {
         offset = 0;
      } else {
         offset += deleteNotDigits(width);
      }
      slidesField.style.transform = `translateX(-${offset}px)`;

      slideIndexSet();
      rullsOfSlides();
      setOppacity();

   });

   leftArrow.addEventListener('click', () => {
      if (offset == 0) {
         offset = deleteNotDigits(width) * (slides.length - 1);
      } else {
         offset -= deleteNotDigits(width);
      }
      slidesField.style.transform = `translateX(-${offset}px)`;

      slideIndexSet();
      rullsOfSlides();
      setOppacity();
   });

   dots.forEach(dot => {
      dot.addEventListener('click', (e) => {
         const slideTo = e.target.getAttribute('data-slide-to');

         slideIndex = slideTo;
         offset = deleteNotDigits(width) * (slideTo - 1);
         slidesField.style.transform = `translateX(-${offset}px)`;

         rullsOfSlides();
         setOppacity();

      });
   });

   function deleteNotDigits(str) {
      return +str.replace(/\D/g, '');
   }
}


/* harmony default export */ __webpack_exports__["default"] = (slider);

/***/ }),

/***/ "./js/modules/tabs.js":
/*!****************************!*\
  !*** ./js/modules/tabs.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function tabs(tabsSelector, tabsContentSelector, tabsParentSelector, activeClass) {
   const tabs = document.querySelectorAll(tabsSelector),
      tabsContent = document.querySelectorAll(tabsContentSelector),
      tabsParent = document.querySelector(tabsParentSelector);

   function hideTabContent() {
      tabsContent.forEach(item => {
         item.classList.add('hide');
         item.classList.remove('show', 'fade');
      });
      tabs.forEach(item => {
         item.classList.remove(activeClass);
      });
   }

   function showTabContent(i = 0) {
      tabsContent[i].classList.add('show', 'fade');
      tabsContent[i].classList.remove('hide');
      tabs[i].classList.add(activeClass);
   }

   hideTabContent();
   showTabContent();

   tabsParent.addEventListener('click', (event) => {
      const target = event.target;

      if (target && target.classList.contains(tabsSelector.slice(1))) {
         tabs.forEach((item, i) => {
            if (target.contains(item)) {
               hideTabContent();
               showTabContent(i);
            }
         });
      }
   });
}

/* harmony default export */ __webpack_exports__["default"] = (tabs);

/***/ }),

/***/ "./js/modules/timer.js":
/*!*****************************!*\
  !*** ./js/modules/timer.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function timer(id, deadline) {

   function getTimeRemaining(endTime) {
      const t = Date.parse(endTime) - Date.parse(new Date()),
         days = Math.floor(t / (1000 * 60 * 60 * 24)),
         hours = Math.floor((t / (1000 * 60 * 60) % 24)),
         minutes = Math.floor((t / 1000 / 60) % 60),
         seconds = Math.floor((t / 1000) % 60);

      return {
         'total': t,
         'days': days,
         'hours': hours,
         'minutes': minutes,
         'seconds': seconds
      };
   }

   function setZero(num) {
      if (num > 0 && num < 10) {
         return `0${num}`;
      } else {
         return num;
      }
   }

   function setClock(selector, endTime) {
      const timer = document.querySelector(selector),
         days = timer.querySelector('#days'),
         hours = timer.querySelector('#hours'),
         minutes = timer.querySelector('#minutes'),
         seconds = timer.querySelector('#seconds'),
         timeInterval = setInterval(updateClock, 1000);

      updateClock();



      function updateClock() {
         const t = getTimeRemaining(endTime);

         days.innerHTML = setZero(t.days);
         hours.innerHTML = setZero(t.hours);
         minutes.innerHTML = setZero(t.minutes);
         seconds.innerHTML = setZero(t.seconds);

         if (t.total <= 0) {
            clearInterval(timeInterval);
         }
      }

   }

   setClock(id, deadline);
}

/* harmony default export */ __webpack_exports__["default"] = (timer);

/***/ }),

/***/ "./js/script.js":
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_tabs_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/tabs.js */ "./js/modules/tabs.js");
/* harmony import */ var _modules_modal_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/modal.js */ "./js/modules/modal.js");
/* harmony import */ var _modules_forms_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/forms.js */ "./js/modules/forms.js");
/* harmony import */ var _modules_timer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/timer.js */ "./js/modules/timer.js");
/* harmony import */ var _modules_cards_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/cards.js */ "./js/modules/cards.js");
/* harmony import */ var _modules_calc_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/calc.js */ "./js/modules/calc.js");
/* harmony import */ var _modules_slider_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/slider.js */ "./js/modules/slider.js");
// "use strict";










window.addEventListener('DOMContentLoaded', () => {

   const modalTimerId = setTimeout(() => Object(_modules_modal_js__WEBPACK_IMPORTED_MODULE_1__["openModal"])('.modal', modalTimerId), 3000);

   Object(_modules_tabs_js__WEBPACK_IMPORTED_MODULE_0__["default"])('.tabheader__item', '.tabcontent', '.tabheader__items', 'tabheader__item_active');
   Object(_modules_timer_js__WEBPACK_IMPORTED_MODULE_3__["default"])('.timer', '2020-12-12');
   Object(_modules_cards_js__WEBPACK_IMPORTED_MODULE_4__["default"])();
   Object(_modules_calc_js__WEBPACK_IMPORTED_MODULE_5__["default"])();

   Object(_modules_slider_js__WEBPACK_IMPORTED_MODULE_6__["default"])({
      container: '.offer__slider',
      nextArrow: '.offer__slider-next',
      prevArrow: '.offer__slider-prev',
      totalCounter: '#total',
      currentCounter: '#current',
      wrapper: '.offer__slider-wrapper',
      field: '.offer__slider-inner',
      slide: '.offer__slide'

   });
   Object(_modules_modal_js__WEBPACK_IMPORTED_MODULE_1__["default"])('[data-modal]', '.modal', modalTimerId);
   Object(_modules_forms_js__WEBPACK_IMPORTED_MODULE_2__["default"])('form', modalTimerId);

});

/***/ }),

/***/ "./js/services/services.js":
/*!*********************************!*\
  !*** ./js/services/services.js ***!
  \*********************************/
/*! exports provided: postData, getResource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "postData", function() { return postData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getResource", function() { return getResource; });
const postData = async (url, data) => {
   const res = await fetch(url, {
      method: 'POST',
      headers: {
         'Content-type': 'application/json'
      },
      body: data
   });

   return await res.json();
};

async function getResource(url) {
   let res = await fetch(url);

   if (!res.ok) {
      throw new Error(`Could not fetch ${url}, status: ${res.status}`);
   }
   return await res.json();
}




/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map