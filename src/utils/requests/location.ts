import { IP_LOCATION_URL } from '@constants/api'

import { ILocationData } from '@interfaces/index'

export const fetchInitialLocation = (): Promise<ILocationData> =>
  fetch(IP_LOCATION_URL).then((res) => res.json())
