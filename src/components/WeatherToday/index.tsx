// import { useEffect } from 'react'
import { useAppSelector } from '@hooks/redux.hooks'

import { Loader } from '@components/Loader'

export const WeatherToday = () => {
  const { isLoadingWeather, errorWeather } = useAppSelector((state) => state.loading)

  const weather = useAppSelector((state) => state.weather)
  const { Value: temp } = weather.accuweather.current.Temperature.Metric

  if (errorWeather) {
    return <p>Something wrong with weather request</p>
  }

  if (isLoadingWeather) {
    return <Loader />
  }

  return <p>Current Weather temp: {Math.round(temp)} &deg;C</p>
}

// useEffect(() => {
//   // fetch(`${OPEN_WEATHER_URL}?city=minsk&appid=${OPEN_WEATHER_KEY}&units=metric`)
//   fetch(
//     'https://api.openweathermap.org/data/2.5/weather?q=minsk&appid=fd4b9aa56de84323b3f5b72c56301ec4&units=metric'
//   )
//     .then((res) => res.json())
//     .then((data) => {
//       // console.log('data: ', data.weather[0].id)
//       // console.log('data: ', data)
//       setTodayData(data.main.temp)
//     })
//     .catch(() => {
//       console.log('error')
//     })
// }, [])
