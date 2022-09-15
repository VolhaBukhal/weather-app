export enum APIs {
  OPENWEATHER = 'openweather',
  ACCUWEATHER = 'accuweather',
}

export const IP_LOCATION_URL = 'https://ipgeolocation.abstractapi.com/v1/'

export const OPENWEATHER_URL_CITY_COORDINATES = 'https://api.openweathermap.org/geo/1.0/direct'
export const OPENWEATHER_URL_ONE_CALL = 'https://api.openweathermap.org/data/2.5/onecall'

export const ACCUWEATHER_URL_CITY_SEARCH =
  'https://dataservice.accuweather.com/locations/v1/cities/search'
export const ACCUWEATHER_URL_CURRENT_CONDITION =
  'https://dataservice.accuweather.com/currentconditions/v1/'
export const ACCUWEATHER_URL_FIVE_DAY =
  'https://dataservice.accuweather.com/forecasts/v1/daily/5day/'
export const ACCUWEATHER_URL_HOURLY =
  'https://dataservice.accuweather.com/forecasts/v1/hourly/12hour/'

// headers for compressed data accuweather
export const headers = {
  'Accept-Encoding': 'gzip,deflate',
}
