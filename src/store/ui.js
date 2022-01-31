import { getApiService } from "@/api/external"

const state = () => ({
  activeModal: null,
  opened: false,
})

const getters = {
  // geoApiCity(state) {
  //   return state.geolocation.city
  // },
}

const mutations = {
  setOpened(state, payload) {
    state.opened = payload
  },
  setModal(state, name) {
    state.activeModal = name
  },
}

const actions = {
  async init({ commit, dispatch }) {
    dispatch("getUserApi")
  },
  async getUserApi({ commit, dispatch }, request) {
    const [err, result] = await getApiService(request)

    if (err) throw err

    commit("setGeoApi", result)

    return result
  },
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
}
