import React from 'react'
import { BgDashboard, BoxDashboard } from './styled'

export const Dashboard: React.FC<any> = ({ children, withBackground }) => {
  return (
    <BgDashboard>
      <BoxDashboard className="container">
        { children }
      </BoxDashboard>
    </BgDashboard>
  )
}