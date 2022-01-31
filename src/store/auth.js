import { loginService } from "@/api/auth"
import { setDefaultAxiosHeader } from "@/plugins/Axios"

const state = () => ({
  token: null,
  uuid: null,
})

const getters = {
  token: (state) => {
    return state.token
  },
  uuid: (state) => {
    return state.uuid
  },
}

const mutations = {
  setToken(state, token) {
    state.token = token

    setDefaultAxiosHeader("Authorization", "Bearer " + token)
  },
  setUuid(state, uuid) {
    state.uuid = uuid

    setDefaultAxiosHeader("Widget-Uuid", uuid)
  },
  logOut(state) {
    state.token = null
  },
}

const actions = {
  async login({ commit, dispatch }, request) {
    const [err, result] = await loginService(request)

    if (err) throw err

    // commit("updateUser", result)

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
