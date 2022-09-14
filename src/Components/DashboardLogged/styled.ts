import styled from 'styled-components'
import { Colors } from '@src/Styles/Colors'

export const BoxMyAlbum = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  
  @media (max-width: 992px) {
    height: auto;
  }
`

export const Header = styled.div`
  background: url(/bgHeader.jpg) no-repeat center center;
  background-size: cover;
  height: 95px;
  display: flex;
  justify-content: center;
  align-items: center;

  * {
    padding: 0;
    margin: 0;
    color: ${Colors.white};
  }
`

export const ContentBoxAlbum = styled.div`
  flex: 1;
  padding: 60px 0;
`

export const Footer = styled.div`
  background: url(/bgFooter.jpg) no-repeat center center;
  background-size: cover;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;

  svg {
    margin-right: 10px;
  }

  * {
    padding: 0;
    margin: 0;
    color: ${Colors.white};
  }
`

export const BoxSimpleText = styled.div`
  * {
    color: ${Colors.primary};
    font-weight: 600;
    font-size: 14px;
  }
`

export const BoxIcons = styled.div`
  svg {
    font-size: 40px;
    padding: 10px;
    border-radius: 10px;
    cursor: pointer;

    &:hover {
      background: rgba(255, 255, 255, .9);

      &, * {
        color: ${Colors.primary} !important;
      }
    }
  }
`
