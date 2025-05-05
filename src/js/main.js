import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';
import 'swiper/css/scrollbar';
import '/css/main.css';
import 'fslightbox';

// components
import { useBurger } from './components/burger';
import { useCheckOpenStatus } from './components/workStatus';
import { useOpenWorkStatus } from './components/workStatus';
import { useGallerySlider } from './components/slider';
import { useMoreGalleryButton } from './components/more-button';
import { useTestimonialsSlider } from './components/slider';
import { usePhone } from './components/phone';

useBurger();
useCheckOpenStatus();
useOpenWorkStatus();
useGallerySlider();
useMoreGalleryButton();
useTestimonialsSlider();
usePhone();
