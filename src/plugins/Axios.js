import axios from "axios"
import * as rax from "retry-axios"
import { v4 } from "uuid"
import auth from "@/store/auth"

const handleError = async (error) => {
  if (error.response && !error.response.config.url.includes("auth")) {
    if (parseInt(error.response && error.response.status) === 401) {
      await auth.mutations.logOut()
      // window.location.href = "/"
    }
  }
}

// create instance
const api = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
  withCredentials: false,
  raxConfig: {
    retry: 3,
    retryDelay: 3000,
    noResponseRetries: 3,
    backoffType: "static",
  },
  headers: {
    common: {
      "Content-Type": "application/json",
      Accept: "application/json",
      // "X-Requested-With": "XMLHttpRequest",
    },
  },
})

const interceptorId = rax.attach(api)

api.interceptors.request.use(
  (x) => {
    console.log(`${x.method.toUpperCase()} | ${x.url}`, x.params, x.data)
    x.headers["Corellation-ID"] = v4()

    return x
  },
  async (error) => {
    await handleError(error)
    return Promise.reject(error)
  }
)

api.interceptors.response.use(
  (x) => {
    console.log(`${x.status} | ${x.config.url}`, x.data)

    return x
  },
  async (error) => {
    await handleError(error)
    return Promise.reject(error)
  }
)

const initAxios = (app) => {
  app.prototype.$api = api
}

const setDefaultAxiosParam = (param, value) => {
  api.defaults.params = api.defaults.params || {}
  api.defaults.params[param] = value
}

const setDefaultAxiosHeader = (param, value) => {
  api.defaults.headers = api.defaults.headers || { common: {} }
  api.defaults.headers.common[param] = value
}

export { initAxios, setDefaultAxiosParam, setDefaultAxiosHeader, api as $api }
