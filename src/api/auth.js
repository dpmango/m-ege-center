import { $api } from "@/plugins/Axios"
import endpoints from "./endpoints"
import { mapApiError, mapData } from "./helpers"

export const loginService = async (request) => {
  try {
    const { data } = await $api.post(endpoints.auth.login, {
      ...request,
    })

    return [null, mapData(data)]
  } catch (error) {
    return [mapApiError(error), null]
  }
}
