import Vue from "vue"
import VScrollLock from "v-scroll-lock"

const scrollLock = () => {
  Vue.use(VScrollLock, {
    bodyScrollOptions: {
      reserveScrollBarGap: true,
    },
  })
}

export default scrollLock
