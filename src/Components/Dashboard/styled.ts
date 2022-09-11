import styled from 'styled-components'
import bg from './bg.jpg'

export const BgDashboard = styled.div`
  background: url(${bg.src}) no-repeat center center;
  background-size: cover;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  
  @media (max-width: 992px) {
    height: auto;
    padding: 60px 0;
  }
`

export const BoxDashboard = styled.div`
  background: rgba(255, 255, 255, .9);
  padding: 60px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, .2);
  
  @media (max-width: 992px) {
    padding: 30px;
  }
`
