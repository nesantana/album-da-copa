import { Button } from '@src/Components/Button'
import { DashboardLogged } from '@src/Components/DashboardLogged'
import { Input } from '@src/Components/Input'
import { api, urls } from '@src/Services/Api'
import { Separator, Title3 } from '@src/Styles'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

export const Edit: React.FC<any> = () => {
  const router = useRouter()

  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [currentPassword, setCurrentPassword] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string>('')
  const [success, setSuccess] = useState(false)

  const findMe = async () => {
    try {
      const { data } : any = await api.get(urls.findMe)

      setUsername(data.username)
      setEmail(data.email)
    } catch (err) {
      console.error(err)
    }
  }

  useEffect(() => {
    findMe()
  }, [])

  const handleEditUser = async () => {
    if (password || confirmPassword || currentPassword) {
      if (password !== confirmPassword) {
        setError('Opss, parece que as senhas não conferem!')
        return
      }

      const completedNewPassword = password && confirmPassword

      if (completedNewPassword && !currentPassword) {
        setError('Opss, precisa preencher sua senha atual!')
        return
      }

      if (!completedNewPassword && currentPassword) {
        setError('Opss, faltou preencher as novas senhas!')
        return
      }
    }

    const body = {
      username,
      email,
      current_password: currentPassword,
      password,
      confirm_password: confirmPassword,
    }

    setLoading(true)
    try {
      await api.post(urls.editUser, body)

      setSuccess(true)
      setTimeout(() => {
        router.push('/meu-album')
      }, 2000)
    } catch (err: any) {
      setError(err.response.data.error)
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <DashboardLogged>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6 col-sm-12">
            <Title3>
              Dados do Usuário
            </Title3>
            <Input setValue={setUsername} value={username} label="Username" />
            <Separator />

            <Input setValue={setEmail} value={email} label="E-mail" />

            <Separator size={50} />
            <Title3>
              Editar Senhas
            </Title3>
            <Separator />

            <Input setValue={setCurrentPassword} value={currentPassword} label="Senha Atual" />
            <Separator />

            <Input setValue={setPassword} value={password} label="Senha" />
            <Separator />

            <Input setValue={setConfirmPassword} value={confirmPassword} label="Confirmação de Senha" />

            <div className="row">
              <div className="col-md-6">
                <Separator size={30} />
                <Button fullWidth type="secundary" router="/meu-album">voltar</Button>
              </div>
              <div className="col-md-6">
                <Separator size={30} />
                <Button
                  fullWidth
                  loading={loading}
                  onClick={handleEditUser}
                >
                  editar meu cadastro
                </Button>
              </div>
            </div>

            {
              error && (
                <>
                  <Separator size={30} />
                  <div className="alert alert-danger d-flex align-items-center justify-content-between" role="alert">
                    <div>
                      { error }
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
                      Usuário editado com sucesso. Aguarde estamos te redirecionando!
                    </div>
                  </div>
                </>
              )
            }
          </div>
        </div>
      </div>
    </DashboardLogged>
  )
}
