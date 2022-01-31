import Vue from "vue"
import {
  Swiper as SwiperClass,
  Pagination,
  Navigation,
  Mousewheel,
  Scrollbar,
} from "swiper/js/swiper.esm"

import getAwesomeSwiper from "vue-awesome-swiper/dist/exporter"

// import "swiper/css/swiper.css"

// Swiper modules
SwiperClass.use([Navigation, Pagination, Mousewheel, Scrollbar])

const swiper = () => {
  Vue.use(getAwesomeSwiper(SwiperClass))
}

export default swiper
