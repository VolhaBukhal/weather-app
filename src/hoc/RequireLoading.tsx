import { useAppSelector } from '@hooks/redux.hooks'

import { Loader } from '@components/Loader'

import { RequireLoadingProps } from './types'

export const RequireLoading = ({ children }: RequireLoadingProps) => {
  const {
    loading: { isLoadingWeather, errorWeather },
    location: { city },
    weather,
  } = useAppSelector((state) => state)

  const dataIsAsent = !weather.accuweather[city]

  const errorMessage = errorWeather ? <p>Something wrong with request</p> : null
  const spinner = isLoadingWeather || dataIsAsent ? <Loader /> : null
  const content = !errorWeather && !isLoadingWeather && !dataIsAsent ? <>{children} </> : null

  return (
    <>
      {errorMessage}
      {spinner}
      {content}
    </>
  )
}
