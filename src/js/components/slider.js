import Swiper from 'swiper';
import { effectInit } from 'swiper/effect-utils';
import { Navigation, EffectFade, Pagination, Autoplay, Scrollbar } from 'swiper/modules';

export const useFilterServicesSlider = () => {
  new Swiper('.services__filter', {
    slidesPerView: 1.5,
    spaceBetween: 20,
    breakpoints: {
      381: {
        slidesPerView: 2.2,
      },
      769: {
        slidesPerView: 3.2,
      },
      993: {
        slidesPerView: 4.2,
      },
      1201: {
        slidesPerView: 5,
      },
    },
  });
};

export const useServicesSlider = () => {
  document.querySelectorAll('.services__item-slider').forEach((sliderElem) => {
    new Swiper(sliderElem, {
      modules: [Navigation, EffectFade, Pagination],
      slidesPerView: 1,
      loop: true,
      effect: 'fade',
      navigation: {
        nextEl: '.services__item-navigation-button--next',
        prevEl: '.services__item-navigation-button--prev',
      },
      fadeEffect: {
        crossFade: true,
      },
      pagination: {
        el: '.services__item-pagination',
        dynamicBullets: true,
      },
    });
  });
};

export const useTestimonialsSlider = () => {
  new Swiper('.testimonials__slider', {
    modules: [Navigation, EffectFade],
    slidesPerView: 1,
    loop: true,
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

export const useServiceItemPageSlider = () => {
  new Swiper('.service-item-page__slider', {
    modules: [Navigation, Pagination],
    slidesPerView: 1,
    spaceBetween: 20,
    centeredSlides: true,
    loop: true,
    navigation: {
      nextEl: '.service-item-page__slider-button--next',
      prevEl: '.service-item-page__slider-button--prev',
    },
    pagination: {
      el: '.service-item-page__slider-pagination',
      dynamicBullets: true,
    },
    breakpoints: {
      577: {
        slidesPerView: 1.5,
      },
      769: {
        slidesPerView: 2,
      },
      1201: {
        slidesPerView: 2.5,
      },
    },
  });
};
