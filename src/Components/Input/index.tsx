import React from 'react'
import { BoxContentInput, BoxInput } from './styled'

interface iInput {
  label: string
  value: string
  setValue: (value: string) => void,
  type?: 'text' | 'email' | 'tel' | 'password'
}

export const Input: React.FC<iInput> = ({
  label,
  value,
  setValue,
  type = 'text'
}) => {
  const a = 'a'

  return (
    <BoxContentInput>
      <BoxInput value={value} type={type} placeholder={label} onChange={({ target }) => setValue(target.value)}/>
    </BoxContentInput>
  )
}