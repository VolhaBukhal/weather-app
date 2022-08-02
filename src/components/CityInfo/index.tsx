import { KeyboardEvent, useEffect, useRef, RefObject } from 'react'

import { useAppSelector, useAppDispatch } from '@hooks/redux.hooks'
import { setIsLoadingCity, setIsLoadingAccuWeather } from '@store/reducers/loadingSlice'
import { setCity } from '@store/reducers/locationSlice'

import { RequireLoading } from '@hoc/RequireLoading'

import { CurrentWeather } from '@components/CurrentWeather'
import { Loader } from '@components/Loader'
import { ApiControl } from '@components/ApiControl'

import { CityInfoContainer, CitySearch, City, Country } from './styled'

export const CityInfo = () => {
  const { city, country, curAPI } = useAppSelector((state) => state.location)
  const { isLoadingCity, errorCity } = useAppSelector((state) => state.loading)
  const dispatch = useAppDispatch()
  const cityRef: RefObject<HTMLInputElement> = useRef(null)

  useEffect(() => {
    dispatch(setIsLoadingCity())
  }, [dispatch])

  useEffect(() => {
    if (city && curAPI) {
      dispatch(setIsLoadingAccuWeather())
    }
  }, [city, curAPI, dispatch])

  const handleEnterCity = (event: KeyboardEvent) => {
    if (event.key === 'Enter') {
      const curCity = cityRef.current?.value
      if (curCity) {
        dispatch(setCity(curCity))
      }
    }
  }

  const errorMessage = errorCity ? <div>There is no such city. Back to location!</div> : null
  const spinner = isLoadingCity ? <Loader /> : null
  const content =
    !errorCity && !isLoadingCity ? (
      <>
        <City> {city}</City>
        <Country> {country}</Country>
        <CitySearch ref={cityRef} placeholder={city} onKeyPress={handleEnterCity} type="search" />
        <ApiControl />
        <RequireLoading>
          <CurrentWeather />
        </RequireLoading>
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
