import Vue from "vue"
import "core-js/stable"

import router from "@/config/router"
import store from "@/store"
import initPlugins from "@/plugins"
import * as components from "@/components"
import App from "@/App.vue"

if (process.env.NODE_ENV === "development") {
  window.store = store
}

initPlugins(Vue)

for (const name in components) {
  Vue.component(name, components[name])
}

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app")
