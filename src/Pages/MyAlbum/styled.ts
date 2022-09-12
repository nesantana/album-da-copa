import styled from 'styled-components'
import { Colors } from '@src/Styles/Colors'

export const Countries = styled.div`
  background: ${Colors.green};
  padding: 20px 17px;
  display: flex;
  gap: 9px;
  flex-wrap: wrap;
  justify-content: center;
  
  @media (max-width: 992px) {
    height: 100px;
    overflow: auto;
  }
`

export const Country = styled.div`
  background: ${Colors.white};
  padding: 5px 0;
  width: 65px;
  text-align: center;
  font-weight: 600;
  color: ${Colors.primary};
  cursor: pointer;

  &.selected {  
    background: ${Colors.primary};
    color: ${Colors.white};
  }
  
  @media (max-width: 992px) {
    width: 47%;
  }
`

export const Stickers = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  justify-content: center;
`

export const Sticker = styled.div`
  background: ${Colors.white};
  padding: 10px 0;
  width: 19%;
  text-align: center;
  font-weight: 600;
  border-radius: 10px;
  color: ${Colors.primary};
  border: 1px solid ${Colors.textSecundary};
  cursor: pointer;

  &.selected {  
    background: ${Colors.primary};
    color: ${Colors.white};
  }
  
  @media (max-width: 992px) {
    width: 47%;
  }
`
