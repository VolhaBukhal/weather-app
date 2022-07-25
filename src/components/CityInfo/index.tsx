import { KeyboardEvent, useEffect, useState, useRef, RefObject, CSSProperties } from 'react'
import ClipLoader from 'react-spinners/ClipLoader'

import { useAppSelector, useAppDispatch } from '@hooks/redux.hooks'
import { setLocation } from '@store/actions'
import { setCity } from '@store/reducers/locationSlice'
// import { IAccuWeatherData, IAccuWeatherCurrent } from '@interfaces/index'
import { getCityAccuWeather, getAccuWeatherCurrentConditions } from '@utils/requests/weather'

import { CityInfoContainer, CitySearch, Spinner } from './styled'

const override: CSSProperties = {
  display: 'block',
  margin: '0 auto',
  color: 'green',
}

export const CityInfo = () => {
  // const [lat, setLat] = useState<number | null>(null)
  // const [long, setLong] = useState<number | null>(null)
  const { city, country } = useAppSelector((state) => state.location)
  const { isLoading, error } = useAppSelector((state) => state.loading)
  const dispatch = useAppDispatch()
  const cityRef: RefObject<HTMLInputElement> = useRef(null)
  const [temp, setTemp] = useState('')
  const [curCountry, setCurCountry] = useState('')

  useEffect(() => {
    dispatch(setLocation())
  }, [])

  useEffect(() => {
    if (city) {
      getCityAccuWeather(city).then((data) => {
        setCurCountry(data.Country.EnglishName)
        getAccuWeatherCurrentConditions(data.Key).then((res) => {
          setTemp(res.Temperature.Metric.Value?.toString())
        })
      })
    }
  }, [city])

  const handleEnterCity = (event: KeyboardEvent) => {
    if (event.key === 'Enter') {
      const curCity = cityRef.current?.value
      if (curCity) {
        dispatch(setCity(curCity))
      }
    }
  }

  return (
    <CityInfoContainer>
      {!error && !isLoading ? (
        <>
          <div>Minsk: {city}</div>
          <div>Belarus: {country}</div>
          <div>curCountry: {curCountry && curCountry}</div>
          <CitySearch ref={cityRef} placeholder={city} onKeyPress={handleEnterCity} />
          Temperature in city {city} now: {temp} &deg;C
        </>
      ) : (
        <Spinner>
          <ClipLoader cssOverride={override} color="#ffffff" />
        </Spinner>
      )}
    </CityInfoContainer>
  )
}
