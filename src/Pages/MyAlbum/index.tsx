import { api, urls } from '@src/Services/Api'
import bgHeader from '@src/Images/bgHeader.jpg'
import bgFooter from '@src/Images/bgFooter.jpg'
import { Separator, SimpleText, Title1 } from '@src/Styles'
import React, { useEffect, useState } from 'react'
import { BoxMyAlbum, BoxSimpleText, ContentBoxAlbum, Countries, Country, Footer, Header, Sticker, Stickers } from './styled'
import { FiYoutube } from 'react-icons/fi'
import { useRouter } from 'next/router'

interface iMyAlbum {
  id_user: number | string
  countries: iCountryAlbum[]
}

interface iCountryAlbum {
  name: string
  items: boolean[]
}

export const MyAlbum: React.FC<any> = () => {
  const [myAlbum, setMyAlbum] = useState<iMyAlbum>({} as iMyAlbum)
  const [selectedCountry, setSelectedCountry] = useState('FWC')
  const [stickers, setStickers] = useState<boolean[]>([])

  const searchMyAlbum = async () => {
    try {
      const { data }: any = await api.get(urls.stickers)

      setMyAlbum(data as iMyAlbum)
      setSelectedCountry(data.countries[0].name as string)
      setStickers(data.countries[0].items as [])
    } catch (err) {
      console.error(err)
    }
  }

  const router = useRouter()
  const { username } = router.query

  const searchByUsername = async () => {
    try {
      const { data }: any = await api.get(urls.searchAlbum, { username })

      setMyAlbum(data as iMyAlbum)
      setSelectedCountry(data.countries[0].name as string)
      setStickers(data.countries[0].items as [])
    } catch(err) {
      console.error(err)
    }
  }

  useEffect(() => {
    if (username) {
      searchByUsername()
      return
    }

    const token = localStorage.getItem('token')
    api.setToken(token as string)

    searchMyAlbum()
  }, [router])

  const handleChangeCountry = async (index: number) => {
    if (username) {
      return
    }

    const newItems = stickers.map((item, itemIndex) => {
      if (index === itemIndex) {
        return !item
      }

      return item
    })

    const newCountries = myAlbum.countries.map((item) => {
      if (item.name === selectedCountry) {
        return {
          ...item,
          items: newItems
        }
      }

      return item
    })

    const body = {
      name: selectedCountry,
      items: newItems,
    }

    try {
      await api.post(urls.edit, body)

      setMyAlbum({
        ...myAlbum,
        countries: newCountries
      })

      setStickers(newItems as boolean[])
      
    } catch(err) {
      console.error(err)
    }

  }

  return (
    <BoxMyAlbum>
      <Header>
        <Title1>
          {username ? `Album do ${username}` : 'Meu Album'}
        </Title1>
      </Header>

      <ContentBoxAlbum>
        <div className="container">
          <Countries>
            {
              myAlbum.countries && myAlbum.countries.map(({ name, items }) => (
                <Country
                  className={name === selectedCountry ? 'selected' : ''}
                  key={name}
                  onClick={() => {
                    setSelectedCountry(name)
                    setStickers(items as [])
                  }}
                >
                  { name }
                </Country>
              ))
            }
          </Countries>

          <Separator size={30}/>

          <Stickers>
            {
              !!stickers.length && stickers.map((sticker, index) => (
                <Sticker
                  key={`${index}-{selectedCountry}`}
                  className={sticker ? 'selected' : ''}
                  onClick={() => handleChangeCountry(index)}
                >
                  {selectedCountry}-{index + 1}
                </Sticker>
              ))
            }
          </Stickers>
        </div>
      </ContentBoxAlbum>
      
      <BoxSimpleText>
        <div className="container">
          {
            username ? (
              <div className="row">
                <div className="col-12 text-center">
                    <SimpleText>
                      Você está vendo o album do {username}!
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
      <Footer>
        <FiYoutube />
        <SimpleText>
          Created by Be Dev Club
        </SimpleText>
      </Footer>
    </BoxMyAlbum>
  )
}