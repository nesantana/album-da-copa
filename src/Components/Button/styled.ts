import { Colors } from '@src/Styles/Colors'
import styled from 'styled-components'
import { tButton } from '.'

interface iBoxButton {
  fullWidth: boolean,
  type: tButton
}

export const BoxButton = styled.div<iBoxButton>`
  ${ ({ fullWidth }) => fullWidth && `width: 100%;` }
  ${ ({ type }) => {
    if (type === 'primary') {
      return `
        background-color: ${Colors.primary};
        color: ${Colors.white};

        &:hover {
          background-color: ${Colors.primary}AA !important;
          color: ${Colors.white} !important;
        }
      `
    }

    if (type === 'secundary') {
      return `
      background-color: ${Colors.secundary};
        color: ${Colors.white};

        &:hover {
          background-color: ${Colors.secundary}AA !important;
          color: ${Colors.white} !important;
        }
      `
    }
  } }
`