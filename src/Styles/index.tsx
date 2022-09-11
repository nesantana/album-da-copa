import styled from 'styled-components'
import { Colors } from './Colors'

export const Title1 = styled.h1`
  color: ${Colors.primary};
  font: bold 33px 'Montserrat', sans-serif;
`

export const SimpleText = styled.p`
  font: 400 18px 'Montserrat', sans-serif;
  color: ${Colors.text};
`

interface iSeparator {
  size?: string | number
}

export const Separator = styled.div<iSeparator>`
  ${ ({ size = 20 }) => `padding-top: ${size}px`}
`