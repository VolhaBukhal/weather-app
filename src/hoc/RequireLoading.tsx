import { useAppSelector } from '@hooks/redux.hooks'

import { Loader } from '@components/Loader'

import { APIs } from '@constants/api'
import { RequireLoadingProps } from './types'

export const RequireLoading = ({ children }: RequireLoadingProps) => {
  const {
    loading: { isLoadingWeather, errorWeather },
    location: { city, curAPI },
    weather,
  } = useAppSelector((state) => state)

  const dataIsAsent =
    curAPI === APIs.ACCUWEATHER ? !weather.accuweather[city] : !weather.openweather[city]

  const errorMessage = errorWeather ? (
    <p>Something wrong with request... Choose another API!</p>
  ) : null
  const spinner = isLoadingWeather || (dataIsAsent && !errorWeather) ? <Loader /> : null
  const content = !errorWeather && !isLoadingWeather && !dataIsAsent ? <>{children} </> : null

  return (
    <>
      {errorMessage}
      {spinner}
      {content}
    </>
  )
}
