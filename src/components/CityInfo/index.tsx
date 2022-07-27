import { KeyboardEvent, useEffect, useRef, RefObject } from 'react'

import { useAppSelector, useAppDispatch } from '@hooks/redux.hooks'
import { setIsLoadingCity, setIsLoadingAccuWeather } from '@store/reducers/loadingSlice'
import { setCity } from '@store/reducers/locationSlice'

import { CurrentWeather } from '@components/CurrentWeather'
import { Loader } from '@components/Loader'
import { Toast } from '@components/Toast'

import { CityInfoContainer, CitySearch } from './styled'

export const CityInfo = () => {
  const { city, country } = useAppSelector((state) => state.location)
  const { isLoadingCity, errorCity } = useAppSelector((state) => state.loading)
  const dispatch = useAppDispatch()
  const cityRef: RefObject<HTMLInputElement> = useRef(null)

  useEffect(() => {
    dispatch(setIsLoadingCity())
  }, [dispatch])

  useEffect(() => {
    if (city) {
      dispatch(setIsLoadingAccuWeather())
    }
  }, [city, dispatch])

  const handleEnterCity = (event: KeyboardEvent) => {
    if (event.key === 'Enter') {
      const curCity = cityRef.current?.value
      if (curCity) {
        dispatch(setCity(curCity))
      }
    }
  }

  // const errorMessage = errorCity ? <ErrorMessage /> : null
  const errorMessage = errorCity ? <Toast /> : null
  const spinner = isLoadingCity ? <Loader /> : null
  const content =
    !errorCity && !isLoadingCity ? (
      <>
        <div>City: {city}</div>
        <div>Country: {country}</div>
        <CitySearch ref={cityRef} placeholder={city} onKeyPress={handleEnterCity} />
        <CurrentWeather />
      </>
    ) : null

  return (
    <CityInfoContainer>
      {errorMessage}
      {spinner}
      {content}
    </CityInfoContainer>
  )
}
