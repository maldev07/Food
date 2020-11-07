// "use strict";
import tabs from './modules/tabs.js';
import modal from './modules/modal.js';
import forms from './modules/forms.js';
import timer from './modules/timer.js';
import cards from './modules/cards.js';
import calc from './modules/calc.js';
import slider from './modules/slider.js';
import {
   openModal
} from './modules/modal';


window.addEventListener('DOMContentLoaded', () => {

   const modalTimerId = setTimeout(() => openModal('.modal', modalTimerId), 3000);

   tabs('.tabheader__item', '.tabcontent', '.tabheader__items', 'tabheader__item_active');
   timer('.timer', '2020-12-12');
   cards();
   calc();

   slider({
      container: '.offer__slider',
      nextArrow: '.offer__slider-next',
      prevArrow: '.offer__slider-prev',
      totalCounter: '#total',
      currentCounter: '#current',
      wrapper: '.offer__slider-wrapper',
      field: '.offer__slider-inner',
      slide: '.offer__slide'

   });
   modal('[data-modal]', '.modal', modalTimerId);
   forms('form', modalTimerId);

});