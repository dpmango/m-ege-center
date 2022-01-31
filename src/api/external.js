import axios from "axios"
import endpoints from "./endpoints"
import { mapApiError, mapData } from "./helpers"

export const getApiService = async (request) => {
  try {
    const { data } = await axios.get(endpoints.external.geoapi)

    return [null, mapData(data)]
  } catch (error) {
    return [mapApiError(error), null]
  }
}
