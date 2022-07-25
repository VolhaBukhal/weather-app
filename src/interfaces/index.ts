export interface ILocationData {
  city: string
  country: string
  lon: string
  lat: string
}

export interface IAccuWeatherData {
  Key: string
  LocalizedName: string
  EnglishName: string
  Country: {
    LocalizedName: string
    EnglishName: string
  }
  GeoPosition: {
    Latitude: string
    Longitude: string
  }
}

export interface IAccuWeatherCurrent {
  WeatherText: string
  IsDayTime: boolean
  WeatherIcon: number
  Temperature: {
    Metric: {
      Value: number
      Unit: string
    }
  }
}
