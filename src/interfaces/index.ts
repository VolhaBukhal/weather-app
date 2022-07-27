export interface ILocationData {
  city: string
  country: string
  lon: string
  lat: string
}

export interface IWeatherData {
  accuweather: {
    current: IAccuWeatherCurrent
    fiveDays: IAccuWeatherFiveDays
    hourly: IAccuWeatherOneHour[]
  }
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

// [
//   {
//     "DateTime": "2022-07-27T11:00:00+02:00",
//     "EpochDateTime": 1658912400,
//     "WeatherIcon": 2,
//     "IconPhrase": "Mostly sunny",
//     "HasPrecipitation": false,
//     "IsDaylight": true,
//     "Temperature": {
//       "Value": 26.9,
//       "Unit": "C",
//       "UnitType": 17
//     },
//     "PrecipitationProbability": 0,
//     "MobileLink": "http://www.accuweather.com/en/es/madrid/308526/hourly-weather-forecast/308526?day=1&hbhhour=11&unit=c&lang=en-us",
//     "Link": "http://www.accuweather.com/en/es/madrid/308526/hourly-weather-forecast/308526?day=1&hbhhour=11&unit=c&lang=en-us"
//   },
//   {
//     "DateTime": "2022-07-27T12:00:00+02:00",
//     "EpochDateTime": 1658916000,
//     "WeatherIcon": 2,
//     "IconPhrase": "Mostly sunny",
//     "HasPrecipitation": false,
//     "IsDaylight": true,
//     "Temperature": {
//       "Value": 28.2,
//       "Unit": "C",
//       "UnitType": 17
//     },
//     "PrecipitationProbability": 0,
//     "MobileLink": "http://www.accuweather.com/en/es/madrid/308526/hourly-weather-forecast/308526?day=1&hbhhour=12&unit=c&lang=en-us",
//     "Link": "http://www.accuweather.com/en/es/madrid/308526/hourly-weather-forecast/308526?day=1&hbhhour=12&unit=c&lang=en-us"
//   },
//   {
//     "DateTime": "2022-07-27T13:00:00+02:00",
//     "EpochDateTime": 1658919600,
//     "WeatherIcon": 1,
//     "IconPhrase": "Sunny",
//     "HasPrecipitation": false,
//     "IsDaylight": true,
//     "Temperature": {
//       "Value": 29.5,
//       "Unit": "C",
//       "UnitType": 17
//     },
//     "PrecipitationProbability": 0,
//     "MobileLink": "http://www.accuweather.com/en/es/madrid/308526/hourly-weather-forecast/308526?day=1&hbhhour=13&unit=c&lang=en-us",
//     "Link": "http://www.accuweather.com/en/es/madrid/308526/hourly-weather-forecast/308526?day=1&hbhhour=13&unit=c&lang=en-us"
//   },
//   {
//     "DateTime": "2022-07-27T14:00:00+02:00",
//     "EpochDateTime": 1658923200,
//     "WeatherIcon": 1,
//     "IconPhrase": "Sunny",
//     "HasPrecipitation": false,
//     "IsDaylight": true,
//     "Temperature": {
//       "Value": 30.7,
//       "Unit": "C",
//       "UnitType": 17
//     },
//     "PrecipitationProbability": 0,
//     "MobileLink": "http://www.accuweather.com/en/es/madrid/308526/hourly-weather-forecast/308526?day=1&hbhhour=14&unit=c&lang=en-us",
//     "Link": "http://www.accuweather.com/en/es/madrid/308526/hourly-weather-forecast/308526?day=1&hbhhour=14&unit=c&lang=en-us"
//   },
//   {
//     "DateTime": "2022-07-27T15:00:00+02:00",
//     "EpochDateTime": 1658926800,
//     "WeatherIcon": 1,
//     "IconPhrase": "Sunny",
//     "HasPrecipitation": false,
//     "IsDaylight": true,
//     "Temperature": {
//       "Value": 31.9,
//       "Unit": "C",
//       "UnitType": 17
//     },
//     "PrecipitationProbability": 0,
//     "MobileLink": "http://www.accuweather.com/en/es/madrid/308526/hourly-weather-forecast/308526?day=1&hbhhour=15&unit=c&lang=en-us",
//     "Link": "http://www.accuweather.com/en/es/madrid/308526/hourly-weather-forecast/308526?day=1&hbhhour=15&unit=c&lang=en-us"
//   },
//   {
//     "DateTime": "2022-07-27T16:00:00+02:00",
//     "EpochDateTime": 1658930400,
//     "WeatherIcon": 1,
//     "IconPhrase": "Sunny",
//     "HasPrecipitation": false,
//     "IsDaylight": true,
//     "Temperature": {
//       "Value": 33,
//       "Unit": "C",
//       "UnitType": 17
//     },
//     "PrecipitationProbability": 0,
//     "MobileLink": "http://www.accuweather.com/en/es/madrid/308526/hourly-weather-forecast/308526?day=1&hbhhour=16&unit=c&lang=en-us",
//     "Link": "http://www.accuweather.com/en/es/madrid/308526/hourly-weather-forecast/308526?day=1&hbhhour=16&unit=c&lang=en-us"
//   },
//   {
//     "DateTime": "2022-07-27T17:00:00+02:00",
//     "EpochDateTime": 1658934000,
//     "WeatherIcon": 1,
//     "IconPhrase": "Sunny",
//     "HasPrecipitation": false,
//     "IsDaylight": true,
//     "Temperature": {
//       "Value": 34,
//       "Unit": "C",
//       "UnitType": 17
//     },
//     "PrecipitationProbability": 0,
//     "MobileLink": "http://www.accuweather.com/en/es/madrid/308526/hourly-weather-forecast/308526?day=1&hbhhour=17&unit=c&lang=en-us",
//     "Link": "http://www.accuweather.com/en/es/madrid/308526/hourly-weather-forecast/308526?day=1&hbhhour=17&unit=c&lang=en-us"
//   },
//   {
//     "DateTime": "2022-07-27T18:00:00+02:00",
//     "EpochDateTime": 1658937600,
//     "WeatherIcon": 1,
//     "IconPhrase": "Sunny",
//     "HasPrecipitation": false,
//     "IsDaylight": true,
//     "Temperature": {
//       "Value": 35,
//       "Unit": "C",
//       "UnitType": 17
//     },
//     "PrecipitationProbability": 0,
//     "MobileLink": "http://www.accuweather.com/en/es/madrid/308526/hourly-weather-forecast/308526?day=1&hbhhour=18&unit=c&lang=en-us",
//     "Link": "http://www.accuweather.com/en/es/madrid/308526/hourly-weather-forecast/308526?day=1&hbhhour=18&unit=c&lang=en-us"
//   },
//   {
//     "DateTime": "2022-07-27T19:00:00+02:00",
//     "EpochDateTime": 1658941200,
//     "WeatherIcon": 1,
//     "IconPhrase": "Sunny",
//     "HasPrecipitation": false,
//     "IsDaylight": true,
//     "Temperature": {
//       "Value": 34.8,
//       "Unit": "C",
//       "UnitType": 17
//     },
//     "PrecipitationProbability": 0,
//     "MobileLink": "http://www.accuweather.com/en/es/madrid/308526/hourly-weather-forecast/308526?day=1&hbhhour=19&unit=c&lang=en-us",
//     "Link": "http://www.accuweather.com/en/es/madrid/308526/hourly-weather-forecast/308526?day=1&hbhhour=19&unit=c&lang=en-us"
//   },
//   {
//     "DateTime": "2022-07-27T20:00:00+02:00",
//     "EpochDateTime": 1658944800,
//     "WeatherIcon": 1,
//     "IconPhrase": "Sunny",
//     "HasPrecipitation": false,
//     "IsDaylight": true,
//     "Temperature": {
//       "Value": 34.3,
//       "Unit": "C",
//       "UnitType": 17
//     },
//     "PrecipitationProbability": 0,
//     "MobileLink": "http://www.accuweather.com/en/es/madrid/308526/hourly-weather-forecast/308526?day=1&hbhhour=20&unit=c&lang=en-us",
//     "Link": "http://www.accuweather.com/en/es/madrid/308526/hourly-weather-forecast/308526?day=1&hbhhour=20&unit=c&lang=en-us"
//   },
//   {
//     "DateTime": "2022-07-27T21:00:00+02:00",
//     "EpochDateTime": 1658948400,
//     "WeatherIcon": 1,
//     "IconPhrase": "Sunny",
//     "HasPrecipitation": false,
//     "IsDaylight": true,
//     "Temperature": {
//       "Value": 33.8,
//       "Unit": "C",
//       "UnitType": 17
//     },
//     "PrecipitationProbability": 0,
//     "MobileLink": "http://www.accuweather.com/en/es/madrid/308526/hourly-weather-forecast/308526?day=1&hbhhour=21&unit=c&lang=en-us",
//     "Link": "http://www.accuweather.com/en/es/madrid/308526/hourly-weather-forecast/308526?day=1&hbhhour=21&unit=c&lang=en-us"
//   },
//   {
//     "DateTime": "2022-07-27T22:00:00+02:00",
//     "EpochDateTime": 1658952000,
//     "WeatherIcon": 33,
//     "IconPhrase": "Clear",
//     "HasPrecipitation": false,
//     "IsDaylight": false,
//     "Temperature": {
//       "Value": 32.5,
//       "Unit": "C",
//       "UnitType": 17
//     },
//     "PrecipitationProbability": 0,
//     "MobileLink": "http://www.accuweather.com/en/es/madrid/308526/hourly-weather-forecast/308526?day=1&hbhhour=22&unit=c&lang=en-us",
//     "Link": "http://www.accuweather.com/en/es/madrid/308526/hourly-weather-forecast/308526?day=1&hbhhour=22&unit=c&lang=en-us"
//   }
// ]
