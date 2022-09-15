export interface ILocationState {
  city: string
  country: string
  lon: string
  lat: string
  curAPI: string
  curIcon: string | number
  defaultLocation: {
    city: string
    country: string
    lon: string
    lat: string
  }
}
export interface ILocationData {
  city: string
  country: string
  longitude: string
  latitude: string
}

export interface IWeatherData {
  accuweather: {
    [city: string]: IAccuWeatherCity
  }
  openweather: {
    [city: string]: IOpenWeatherAll
  }
}

export type IWeatherDataKeys = keyof IWeatherData

export interface IAccuWeatherCity {
  current: IAccuWeatherCurrent
  daily: IAccuWeatherFiveDays
  hourly: IAccuWeatherOneHour[]
  country: string
}

export interface IOpenWeatherCurrent {
  coord: {
    lon: number
    lat: number
  }
  weather: [
    {
      id: number
      main: string
      description: string
      icon: string
    }
  ]
  main: {
    temp: number
    feels_like: number
    humidity: number
  }
  wind: {
    speed: number
    deg: number
  }
  sys: {
    type: number
    id: number
    country: string
    sunrise: number
    sunset: number
  }
}
export interface IOpenWeatherFiveDays {
  city: {
    id: number
    name: string
    coord: {
      lon: number
      lat: number
    }
    country: string
    population: number
    timezone: number
  }
  cod: string
  message: number
  cnt: 3
  list: IOpenWeatherOneDay[]
}

interface IOpenWeatherOneDay {
  dt: number
  sunrise: number
  sunset: number
  temp: {
    day: number
    min: number
    max: number
    night: number
    eve: number
    morn: number
  }
  feels_like: {
    day: number
    night: number
    eve: number
    morn: number
  }
  humidity: number
  weather: [
    {
      id: number
      main: string
      description: string
      icon: string
    }
  ]
  speed: number
  deg: number
  gust: number
  clouds: number
  pop: number
  rain: number
}

export interface IOpenWeatherAll {
  timezone_offset: number
  current: {
    dt: number
    temp: number
    pressure: number
    humidity: number
    wind_speed: number
    weather: [
      {
        id: number
        main: string
        description: string
        icon: string
      }
    ]
  }
  hourly: IOpenWeatherOneHourItem[]
  daily: IOpenWeatherOneDayItem[]
  country: string
}

export interface IOpenWeatherOneHourItem {
  dt: number
  temp: number
  humidity: number
  dew_point: number
  wind_speed: number
  weather: [
    {
      id: number
      main: string
      description: string
      icon: string
    }
  ]
}

export interface IOpenWeatherOneDayItem {
  dt: number
  temp: {
    day: number
  }
  humidity: number
  wind_speed: number
  weather: [
    {
      id: number
      main: string
      description: string
      icon: string
    }
  ]
}

export interface IOpenWeatherCoordinates {
  name: string
  lat: number
  lon: number
  country: string
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
  LocalObservationDateTime: string
  EpochTime: number
  WeatherText: string
  IsDayTime: boolean
  WeatherIcon: number
  Temperature: {
    Metric: {
      Value: number
      Unit: string
    }
  }
  RealFeelTemperature: {
    Metric: {
      Value: number
      Phrase: string
    }
  }
  RelativeHumidity: number
  Wind: {
    Speed: {
      Metric: {
        Value: number
        Unit: string
      }
    }
  }
}

export interface IAccuWeatherFiveDays {
  Headline: {
    Text: string
  }
  DailyForecasts: IAccuWeatherOneDay[]
}

export interface IAccuWeatherOneDay {
  Date: string
  Temperature: {
    Minimum: {
      Value: number
      Unit: string
    }
    Maximum: {
      Value: number
      Unit: string
    }
  }
  Day: {
    Icon: number
    IconPhrase: string
    HasPrecipitation: false
  }
  Night: {
    Icon: number
    IconPhrase: string
    HasPrecipitation: false
  }
}

export interface IAccuWeatherOneHour {
  DateTime: string
  WeatherIcon: number
  IconPhrase: string
  IsDaylight: true
  Temperature: {
    Value: number
    Unit: string
  }
}

// calender
export interface IEventState {
  items: IEventItem[]
  isSynchronize: boolean
}

export interface IEventsListResponse {
  result: {
    items: IEventItem[]
  }
}

export interface IEventItem {
  created: string
  creator: {
    email: string
    self: true
  }
  end: {
    dateTime: string
    timeZone: string
  }
  htmlLink: string
  start: {
    dateTime: string
    timeZone: string
  }
  summary: string
}

export interface IEventPeriod {
  dateTime: string
  timeZone: string
}
