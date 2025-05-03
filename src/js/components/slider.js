import Swiper from 'swiper';
import { Navigation, EffectFade, Pagination, Autoplay, Scrollbar } from 'swiper/modules';

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

export const useGallerySlider = () => {
  let gallerySlider = null;

  function checkWidth() {
    if (window.innerWidth <= 768) {
      if (!gallerySlider) {
        initSwiper();
      }
    } else {
      if (gallerySlider) {
        destroySwiper();
      }
    }
  }

  function initSwiper() {
    gallerySlider = new Swiper('.gallery__list-slider', {
      modules: [Autoplay, Scrollbar],
      speed: 1000,
      loop: true,
      centeredSlides: true,
      slidesPerView: 1.3,
      spaceBetween: 15,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      scrollbar: {
        el: '.gallery__scrollbar',
        draggable: true,
      },
      breakpoints: {
        381: {
          slidesPerView: 1.5,
        },
        577: {
          spaceBetween: 20,
          slidesPerView: 1.7,
        },
      },
    });
  }

  function destroySwiper() {
    if (gallerySlider) {
      gallerySlider.destroy(true, true);
      gallerySlider = null;
    }
  }

  window.addEventListener('resize', checkWidth);
  checkWidth();
};
