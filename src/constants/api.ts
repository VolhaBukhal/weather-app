export const LANGUAGE_RU = 'ru-RU'

export enum APIs {
  OPENWEATHER = 'openweather',
  ACCUWEATHER = 'accuweather',
}

export const IP_LOCATION_URL = 'https://ipgeolocation.abstractapi.com/v1/'
export const IP_LOCATION_KEY = 'a6512e70f15f4f28a4d6054a90274d80'

// openweather
export const OPENWEATHER_URL = 'https://api.openweathermap.org/data/2.5/weather'
export const OPENWEATHER_KEY = 'fd4b9aa56de84323b3f5b72c56301ec4'

export const OPENWEATHER_URL_CITY_COORDINATES = 'http://api.openweathermap.org/geo/1.0/direct'

export const OPENWEATHER_URL_ONE_CALL = 'http://api.openweathermap.org/data/2.5/onecall'

// accuweather
// headers for compressed data
export const headers = {
  'Accept-Encoding': 'gzip,deflate',
  // 'Access-Control-Allow-Origin': 'no-cors',
}
export const ACCUWEATHER_URL_CITY_SEARCH =
  'http://dataservice.accuweather.com/locations/v1/cities/search'
export const ACCUWEATHER_URL_CURRENT_CONDITION =
  'http://dataservice.accuweather.com/currentconditions/v1/'

export const ACCUWEATHER_URL_FIVE_DAY =
  'http://dataservice.accuweather.com/forecasts/v1/daily/5day/'

export const ACCUWEATHER_URL_HOURLY =
  'http://dataservice.accuweather.com/forecasts/v1/hourly/12hour/'

export const ACCUWEATHER_KEY = 'wy5LWu7ZTe8NNkisxMtcLQ6F9A7GNzLi'
