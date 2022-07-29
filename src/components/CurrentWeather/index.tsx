import { useAppSelector } from '@hooks/redux.hooks'

// import { Loader } from '@components/Loader'

import { TemperatureValue } from '@components/styled'
import { WeatherDescription } from './styled'

export const CurrentWeather = () => {
  // const { isLoadingWeather, errorWeather } = useAppSelector((state) => state.loading)
  const weather = useAppSelector((state) => state.weather)
  const { city } = useAppSelector((state) => state.location)
  // // eslint-disable-next-line no-debugger
  // debugger
  const { Value: temp } = weather.accuweather[city].current.Temperature.Metric
  const { RelativeHumidity, Wind, WeatherText: descr } = weather.accuweather[city].current

  // if (errorWeather) {
  //   return <p>Something wrong with weather request</p>
  // }

  // if (isLoadingWeather) {
  //   return <Loader />
  // }

  if (!city) {
    return null
  }

  return (
    <>
      <TemperatureValue>
        {Math.round(temp)}&deg;C
        <WeatherDescription>{descr.toLocaleLowerCase()}</WeatherDescription>
      </TemperatureValue>
      <div>
        Wind speed {Wind.Speed.Metric.Value} {Wind.Speed.Metric.Unit}
      </div>
      <div>Humidity {RelativeHumidity}%</div>
    </>
  )
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
