import Link from 'next/link'
import React, { ReactNode } from 'react'
import { BoxButton } from './styled'

export type tButton = 'primary' | 'secundary'

interface iButton {
  children: ReactNode,
  type?: tButton
  fullWidth?: boolean,
  router?: string,
  loading?: boolean,
  onClick?: () => void
}

export const Button: React.FC<iButton> = ({
  children,
  type = 'primary',
  fullWidth = true,
  router,
  loading = false,
  onClick = () => {}
}) => {

  const MyBytton: React.FC<any> = () => {
    return (
      <BoxButton
        type={type}
        fullWidth={fullWidth}
        className='btn'
        onClick={onClick}
      >
        {
          loading ? (
            <div className="spinner-border spinner-border-sm" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          ) : children
        }
      </BoxButton>
    )
  }

  if (router) {
    return (
      <Link
        href={router}
      >
        <div>
          <MyBytton />
        </div>
      </Link>
    )
  }

  return (
    <MyBytton />
  )
}