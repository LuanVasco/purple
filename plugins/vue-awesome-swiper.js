import Vue from 'vue' 
import { Swiper as SwiperClass, Pagination, Navigation, Mousewheel} from 'swiper/swiper.esm'
import getAwesomeSwiper from 'vue-awesome-swiper/dist/exporter'

SwiperClass.use([Pagination, Mousewheel, Navigation])
Vue.use(getAwesomeSwiper(SwiperClass))

const { Swiper, SwiperSlide } = getAwesomeSwiper(SwiperClass)

import 'swiper/swiper-bundle.min.css'