import { KeyboardEvent, useEffect, useRef, RefObject } from 'react'

import { useAppSelector, useAppDispatch } from '@hooks/redux.hooks'
import { setIsLoadingCity, setIsLoadingAccuWeather } from '@store/reducers/loadingSlice'
import { setCity } from '@store/reducers/locationSlice'

import { Loader } from '@components/Loader'

import { CityInfoContainer, CitySearch } from './styled'

export const CityInfo = () => {
  // const [lat, setLat] = useState<number | null>(null)
  // const [long, setLong] = useState<number | null>(null)
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

  return (
    <CityInfoContainer>
      {!errorCity && !isLoadingCity ? (
        <>
          <div>City: {city}</div>
          <div>Country: {country}</div>
          <CitySearch ref={cityRef} placeholder={city} onKeyPress={handleEnterCity} />
        </>
      ) : (
        <Loader />
      )}
    </CityInfoContainer>
  )
}
