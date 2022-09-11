import { Dashboard } from '@src/Components/Dashboard'
import React, { useState } from 'react'
import album from '@src/Images/album.png'
import { Separator, Title1 } from '@src/Styles'
import { Button } from '@src/Components/Button'
import { Input } from '@src/Components/Input'
import { api, urls } from '@src/Services/Api'
import { useRouter } from 'next/router'
import { FiX } from 'react-icons/fi'

export const Register: React.FC<any> = () => {
  const [loading, setLoading] = useState(false)
  const [user, setUser] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const [error, setError] = useState<any[]>([])
  const [success, setSuccess] = useState(false)

  const router = useRouter()

  const handleCreateUser = async () => {
    setLoading(true)
    const body = {
      username: user,
      email,
      password,
      confirm_password: confirmPassword
    }

    try {
      await api.post(urls.create, body)

      setSuccess(true)
      setTimeout(() => {
        router.push('/login')
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
          <Title1 className='text-end'>Cadastre-se</Title1>
          <Separator size={30} />
          
          <Input value={user} setValue={setUser} label="Nome de Usuário"/>
          <Separator />
          <Input value={email} setValue={setEmail} label="E-mail"/>
          <Separator />
          <Input value={password}  type="password" setValue={setPassword} label="Senha"/>
          <Separator />
          <Input value={confirmPassword} type="password" setValue={setConfirmPassword} label="Confirmação de Senha"/>
          <Separator size={30} />

          <div className="row">
            <div className="col-md-6">
            <Button fullWidth type="secundary" router="/">voltar</Button>
            </div>
            <div className="col-md-6">
            <Button fullWidth loading={loading} onClick={handleCreateUser}>Cadastrar</Button>
            </div>
          </div>
          
          {
            !!error.length && (
            <div className="alert alert-danger d-flex align-items-center justify-content-between" role="alert">
              <div>
                {
                  error.map(err => (
                    <div key={err}>
                      { err }
                      <Separator size="10" />
                    </div>
                  ))
                }
              </div>
              <div>
                <FiX onClick={() => setError([])} role="button"/>
              </div>
            </div>
            )
          }
          {
            success && (
              <div className="alert alert-success d-flex align-items-center justify-content-between" role="alert">
                <div>
                  Usuário criado com sucesso. Aguarde estamos te redirecionando!
                </div>
              </div>
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