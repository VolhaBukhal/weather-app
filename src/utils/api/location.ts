import { IP_LOCATION_URL } from '@constants/api'
import { ILocationData } from '@interfaces/index'

export const fetchInitialLocation = async (): Promise<ILocationData> => {
  const baseURL = IP_LOCATION_URL
  const query = `?api_key=${process.env.REACT_APP_IP_LOCATION_KEY}`
  const response = await fetch(`${baseURL}${query}`)
  if (response.status === 401) {
    throw new Error('Unauthorized')
  }
  const data: ILocationData = await response.json()
  return data
}
