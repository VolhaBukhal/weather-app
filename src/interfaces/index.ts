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
      main: 'Clouds'
      description: 'overcast clouds'
      icon: '04d'
    }
  ]
  main: {
    temp: 8.48
    feels_like: 4.9
    humidity: 79
  }
  wind: {
    speed: 7.3
    deg: 189
  }
  sys: {
    type: 2
    id: 2031790
    country: 'GB'
    sunrise: 1647325488
    sunset: 1647367827
  }
}
export interface IOpenWeatherFiveDays {
  city: {
    id: 2641549
    name: 'Newtonhill'
    coord: {
      lon: -2.15
      lat: 57
    }
    country: 'GB'
    population: 3284
    timezone: 0
  }
  cod: '200'
  message: 18.7713997
  cnt: 3
  list: IOpenWeatherOneDay[]
}

interface IOpenWeatherOneDay {
  dt: 1647345600
  sunrise: 1647325488
  sunset: 1647367827
  temp: {
    day: 7.89
    min: 3.93
    max: 8.83
    night: 7.21
    eve: 8.08
    morn: 4.03
  }
  feels_like: {
    day: 4.06
    night: 3.59
    eve: 4.7
    morn: -0.13
  }
  humidity: 78
  weather: [
    {
      id: 500
      main: 'Rain'
      description: 'light rain'
      icon: '10d'
    }
  ]
  speed: 7.61
  deg: 194
  gust: 13.48
  clouds: 96
  pop: 0.42
  rain: 0.29
}

export interface IOpenWeatherAll {
  timezone_offset: number
  current: {
    dt: 1659161344
    sunrise: 1659147652
    sunset: 1659204344
    temp: 17.86
    feels_like: 17.48
    pressure: 1020
    humidity: 68
    wind_speed: 2.13
    weather: [
      {
        id: 804
        main: 'Clouds'
        description: 'overcast clouds'
        icon: '04d'
      }
    ]
  }
  hourly: IOpenWeatherOneHourItem[]
  daily: IOpenWeatherOneDayItem[]
  country: string
}

export interface IOpenWeatherOneHourItem {
  dt: 1659330000
  temp: 18.33
  feels_like: 18.07
  pressure: 1012
  humidity: 71
  dew_point: 12.98
  uvi: 0.38
  clouds: 100
  visibility: 10000
  wind_speed: 3.21
  wind_deg: 138
  wind_gust: 8.3
  weather: [
    {
      id: 804
      main: 'Clouds'
      description: 'overcast clouds'
      icon: '04d'
    }
  ]
  pop: 0
}

export interface IOpenWeatherOneDayItem {
  dt: 1659175200
  temp: {
    day: 22.52
  }
  humidity: 53
  wind_speed: 3.4
  weather: [
    {
      id: 804
      main: 'Clouds'
      description: 'overcast clouds'
      icon: '04d'
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
    email: 'o.bukhal@gmail.com'
    self: true
  }
  end: {
    dateTime: '2022-08-03T17:44:22+03:00'
    timeZone: 'Europe/Paris'
  }
  etag: '"3319018134166000"'
  eventType: 'default'
  htmlLink: 'https://www.google.com/calendar/event?eid=YW02aDFhc3U1NTJiNDhwMWlucHBjcTc5czAgby5idWtoYWxAbQ'
  iCalUID: 'am6h1asu552b48p1inppcq79s0@google.com'
  id: 'am6h1asu552b48p1inppcq79s0'
  kind: 'calendar#event'
  organizer: {
    email: 'o.bukhal@gmail.com'
    self: true
  }
  reminders: {
    useDefault: true
  }
  sequence: 0
  start: {
    dateTime: '2022-08-03T09:44:22+03:00'
    timeZone: 'Europe/Paris'
  }
  status: 'confirmed'
  summary: 'Poc Dev From Now'
  updated: '2022-08-03T06:44:27.083Z'
}
