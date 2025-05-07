import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import '/css/service-item-page.css';
import 'fslightbox';

// components
import { useBurger } from './components/burger';
import { useModal } from './components/modal';
import { useNameServicePage } from './components/modal';
import { useServiceItemPageSlider } from './components/slider';
import { useCheckOpenStatus } from './components/workStatus';
import { useOpenWorkStatus } from './components/workStatus';
import { useFilterServices } from './components/filterService';
import { useFilterServicesSlider } from './components/slider';
import { useServicesSlider } from './components/slider';
import { usePhone } from './components/phone';

useBurger();
useModal();
useNameServicePage();
useServiceItemPageSlider();
useCheckOpenStatus();
useOpenWorkStatus();
useFilterServices();
useFilterServicesSlider();
useServicesSlider();
usePhone();
