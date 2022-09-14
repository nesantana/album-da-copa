import { api } from '@src/Services/Api'
import { SimpleText, Title1 } from '@src/Styles'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { FiEdit, FiHome, FiYoutube } from 'react-icons/fi'
import {
  BoxIcons,
  BoxMyAlbum,
  BoxSimpleText,
  ContentBoxAlbum,
  Footer,
  Header,
} from './styled'

export const DashboardLogged: React.FC<any> = ({ children, username }) => {
  const router = useRouter()

  useEffect(() => {
    const token = localStorage.getItem('token')
    api.setToken(token as string)
  }, [])

  return (
    <>
      <BoxMyAlbum>
        <Header>
          <div className="container d-flex justify-content-between">
            <BoxIcons className="d-flex">
              <FiHome onClick={() => router.push('/')} />
              {
                username ? false : (
                  <FiEdit onClick={() => router.push('/editar')} />
                )
              }
            </BoxIcons>
            <Title1>
              {username ? `Album do ${username}` : 'Meu Album'}
            </Title1>
          </div>
        </Header>

        <ContentBoxAlbum>
          { children }
        </ContentBoxAlbum>

        <BoxSimpleText>
          <div className="container">
            {
            username ? (
              <div className="row">
                <div className="col-12 text-center">
                  <SimpleText>
                    Você está vendo o album do
                    {' '}
                    {username}
                    !
                  </SimpleText>
                </div>
              </div>
            ) : (
              <div className="row">
                <div className="col-lg-6 col-sm-12 text-center text-lg-start">
                  <SimpleText>
                    Basta clicar nas figurinhas que já completou!
                  </SimpleText>
                </div>

                <div className="col-lg-6 col-sm-12 text-lg-end text-center">
                  <SimpleText>
                    Fica tranquilo, que o salvamento é automático!
                  </SimpleText>
                </div>
              </div>
            )
          }
          </div>
        </BoxSimpleText>
        <a href="https://youtube.com/mateussantana" target="_blank" rel="noreferrer">
          <Footer>
            <FiYoutube />
            <SimpleText>
              Created by Be Dev Club
            </SimpleText>
          </Footer>
        </a>
      </BoxMyAlbum>
    </>
  )
}
