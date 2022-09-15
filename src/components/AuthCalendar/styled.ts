import styled from 'styled-components'
import { CUSTOM_SCROLL } from '@components/styled'

const HEIGHT = '180'
const WIDTH = '100'

export const Container = styled.div`
  width: ${WIDTH}%;
  max-height: ${HEIGHT}px;
  background-color: ${({ theme }) => theme.colors.shadowedLight};
  border-radius: 0 0 ${({ theme }) => theme.borderRadius / 2}px
    ${({ theme }) => theme.borderRadius / 2}px;
  overflow: auto;
  ${CUSTOM_SCROLL}
`
