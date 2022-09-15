export {}

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      REACT_APP_GOOGLE_API_KEY: string
      REACT_APP_GOOGLE_CLIENT_ID: string
      REACT_APP_IP_LOCATION_KEY: string
      REACT_APP_OPENWEATHER_KEY: string
      REACT_APP_ACCUWEATHER_KEY: string
    }
  }
}
