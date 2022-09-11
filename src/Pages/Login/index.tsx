import { Dashboard } from '@src/Components/Dashboard'
import React, { useState } from 'react'
import album from '@src/Images/album.png'
import { Separator, Title1 } from '@src/Styles'
import { Input } from '@src/Components/Input'
import { Button } from '@src/Components/Button'
import { api, urls } from '@src/Services/Api'
import { useRouter } from 'next/router'
import { FiX } from 'react-icons/fi'

export const Login: React.FC<any> = () => {
  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string>('')
  const [success, setSuccess] = useState(false)

  const router = useRouter()

  const handleLogin = async () => {
    setLoading(true)
    const body = {
      user,
      password
    }

    try {
      const { data }: any = await api.post(urls.login, body)

      localStorage.setItem('token', data.token)
      api.setToken(data.token)

      setSuccess(true)

      setTimeout(() => {
        router.push('/meu-album')
      }, 3000);
    } catch (err: any) {
      setError(err.response.data.error)
      console.error(err)
    } finally {
      setLoading(false)
    }


  }

  return (
    <Dashboard withBackground>
      <div className="row justify-content-center align-items-center">
        <div className="col-md-4 col-sm-12">
          <Title1 className='text-end'>Login</Title1>
          <Separator size={30} />
          
          <Input value={user} setValue={setUser} label="Nome de Usuário"/>
          <Separator />
          <Input value={password}  type="password" setValue={setPassword} label="Senha"/>
          <Separator size={30} />

          <div className="row">
            <div className="col-md-6">
            <Button fullWidth type="secundary" router="/cadastre-se">Cadastrase-se</Button>
            </div>
            <div className="col-md-6">
            <Button fullWidth loading={loading} onClick={handleLogin}>Logar</Button>
            </div>
          </div>
          
          {
            !!error.length && (
            <>
              <Separator size={30} />
              <div className="alert alert-danger d-flex align-items-center justify-content-between" role="alert">
                <div>
                      <div>
                        { error }
                      </div>
                </div>
                <div>
                  <FiX onClick={() => setError([])} role="button"/>
                </div>
              </div>
            </>
            )
          }
          {
            success && (
              <>
                <Separator size={30} />
                <div className="alert alert-success d-flex align-items-center justify-content-between" role="alert">
                  <div>
                    Usuário logado com sucesso. Aguarde estamos te redirecionando!
                  </div>
                </div>
            </>
            )
          }
        </div>
        <div className="col-md-6 col-sm-12">
          <img src={album.src} alt="Album da Copa 2022" />
        </div>
      </div>
    </Dashboard>
  )
}