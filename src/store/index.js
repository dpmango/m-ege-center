import Vue from "vue"
import Vuex from "vuex"

import auth from "./auth"
import ui from "./ui"

Vue.use(Vuex)

export default new Vuex.Store({
  actions: {
    async init({ dispatch, commit }, { token }) {
      commit("auth/setToken", token, { root: true })
      dispatch("ui/init")
    },
  },
  modules: {
    auth: auth,
    ui: ui,
  },
})
