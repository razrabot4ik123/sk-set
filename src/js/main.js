import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import 'swiper/css/scrollbar';
import '/css/main.css';
import 'fslightbox';

// components
import { useBurger } from './components/burger';
import { useModal } from './components/modal';
import { useNextBtn } from './components/modal';
import { useCheckOpenStatus } from './components/workStatus';
import { useOpenWorkStatus } from './components/workStatus';
import { useServicesSlider } from './components/slider';
import { useGallerySlider } from './components/slider';
import { useMoreGalleryButton } from './components/more-button';
import { useTestimonialsSlider } from './components/slider';
import { usePhone } from './components/phone';

useBurger();
useModal();
useNextBtn();
useCheckOpenStatus();
useOpenWorkStatus();
useServicesSlider();
useGallerySlider();
useMoreGalleryButton();
useTestimonialsSlider();
usePhone();
