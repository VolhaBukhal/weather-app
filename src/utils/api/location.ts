import { IP_LOCATION_URL, IP_LOCATION_KEY } from '@constants/api'

import { ILocationData } from '@interfaces/index'

export const fetchInitialLocation = async (): Promise<ILocationData> => {
  const baseURL = IP_LOCATION_URL
  const query = `?api_key=${IP_LOCATION_KEY}`
  const response = await fetch(`${baseURL}${query}`)
  const data: ILocationData = await response.json()
  return data
}
