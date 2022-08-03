export const LANGUAGE_RU = 'ru-RU'

export enum APIs {
  OPENWEATHER = 'openweather',
  ACCUWEATHER = 'accuweather',
}

export const GOOGLE_API_KEY = 'AIzaSyAyAXmOLakwXi6U5L09XBm0yLINvvY7yic'
export const GOOGLE_CLIENT_ID =
  '800800416255-9vr6m774d2a3253s31q996ta0okvc7df.apps.googleusercontent.com'

// HTTP/1.1 302 Found
// Location: https://accounts.google.com/o/oauth2/v2/auth?redirect_uri=https%3A%2F%2Fdevelopers.google.com%2Foauthplayground&prompt=consent&response_type=code&client_id=407408718192.apps.googleusercontent.com&scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fcalendar+https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fcalendar.events&access_type=offline'
export const IP_LOCATION_URL = 'https://ipgeolocation.abstractapi.com/v1/'
export const IP_LOCATION_KEY = 'a6512e70f15f4f28a4d6054a90274d80'

// openweather
export const OPENWEATHER_KEY = 'fd4b9aa56de84323b3f5b72c56301ec4'
export const OPENWEATHER_URL_CITY_COORDINATES = 'https://api.openweathermap.org/geo/1.0/direct'
export const OPENWEATHER_URL_ONE_CALL = 'https://api.openweathermap.org/data/2.5/onecall'

// accuweather
// headers for compressed data
export const headers = {
  'Accept-Encoding': 'gzip,deflate',
  // 'Access-Control-Allow-Origin': 'no-cors',
}
export const ACCUWEATHER_URL_CITY_SEARCH =
  'https://dataservice.accuweather.com/locations/v1/cities/search'
export const ACCUWEATHER_URL_CURRENT_CONDITION =
  'https://dataservice.accuweather.com/currentconditions/v1/'

export const ACCUWEATHER_URL_FIVE_DAY =
  'https://dataservice.accuweather.com/forecasts/v1/daily/5day/'

export const ACCUWEATHER_URL_HOURLY =
  'https://dataservice.accuweather.com/forecasts/v1/hourly/12hour/'

export const ACCUWEATHER_KEY = 'wy5LWu7ZTe8NNkisxMtcLQ6F9A7GNzLi'
