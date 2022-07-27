import { useAppSelector } from '@hooks/redux.hooks'

import { Loader } from '@components/Loader'

interface RequireLoadingProps {
  children: JSX.Element
}

export const RequireLoading = ({ children }: RequireLoadingProps) => {
  const { isLoadingWeather, errorWeather } = useAppSelector((state) => state.loading)

  const errorMessage = errorWeather ? <p>Something wrong with request</p> : null
  const spinner = isLoadingWeather ? <Loader /> : null
  const content = !errorWeather && !isLoadingWeather ? <>{children} </> : null

  return (
    <>
      {errorMessage}
      {spinner}
      {content}
    </>
  )
}
