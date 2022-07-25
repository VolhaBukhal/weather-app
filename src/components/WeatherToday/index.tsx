import { useState, useEffect } from 'react'

// import { OPEN_WEATHER_URL, OPEN_WEATHER_KEY } from '@constants/api'

export const WeatherToday = () => {
  const [todayData, setTodayData] = useState()

  useEffect(() => {
    // fetch(`${OPEN_WEATHER_URL}?city=minsk&appid=${OPEN_WEATHER_KEY}&units=metric`)
    fetch(
      'https://api.openweathermap.org/data/2.5/weather?q=minsk&appid=fd4b9aa56de84323b3f5b72c56301ec4&units=metric'
    )
      .then((res) => res.json())
      .then((data) => {
        // console.log('data: ', data.weather[0].id)
        // console.log('data: ', data)
        setTodayData(data.main.temp)
      })
      .catch(() => {
        console.log('error')
      })
  }, [])
  return <p>Current Weather temp: {todayData}</p>
}
