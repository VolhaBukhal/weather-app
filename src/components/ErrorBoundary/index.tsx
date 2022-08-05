import { Component, ErrorInfo } from 'react'

import { ErrorBoundaryProps, ErrorBoundaryState } from './types'
import { ErrorWrapper, Heading } from './styled'

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props)
    this.state = {
      error: false,
    }
  }

  static getDerivedStateFromError() {
    return { error: true }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error: ', error, errorInfo)
  }

  render() {
    const { error } = this.state
    const { children } = this.props
    return error ? (
      <ErrorWrapper>
        <Heading>Something went wrong &#9785;...</Heading>
      </ErrorWrapper>
    ) : (
      children
    )
  }
}
