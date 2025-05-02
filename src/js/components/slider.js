import { tr } from 'intl-tel-input/i18n';
import Swiper from 'swiper';
import { Navigation, EffectFade, Pagination } from 'swiper/modules';

export const useTestimonialsSlider = () => {
  new Swiper('.testimonials__slider', {
    modules: [Navigation, EffectFade, Pagination],
    slidesPerView: 1,
    loop: true,
    spaceBetween: 24,
    effect: 'fade',
    fadeEffect: {
      crossFade: true,
    },
    navigation: {
      nextEl: '.testimonials__button--next',
      prevEl: '.testimonials__button--prev',
    },
  });
};
