import { Colors } from '@src/Styles/Colors'
import styled from 'styled-components'

export const BoxInput = styled.input`
  height: 45px;
  width: 100%;
  background: transparent;
  border: 0;
  outline: none;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, .3);
  border-radius: 10px;
  text-align: right;
  padding: 15px;
  color: ${Colors.text};

  &:focus {
    box-shadow: 1px 1px 5px rgba(0, 0, 0, .5);
  }
`

export const BoxContentInput = styled.div`
  position: relative;
`