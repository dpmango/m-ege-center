import legacy from "./Legacy"
import { initAxios } from "./Axios"
import veeValidate from "./VeeValidate"
import select from "./Select"
import clickOutside from "./ClickOutside"
import mask from "./Mask"
import swiper from "./Swiper"
import scrollLock from "./ScrollLock"

const initPlugins = (app) => {
  legacy()
  initAxios(app)
  veeValidate(app)
  select(app)
  clickOutside(app)
  mask()
  swiper()
  scrollLock()
}

export default initPlugins
