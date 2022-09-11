import { Button } from '@src/Components/Button'
import { Dashboard } from '@src/Components/Dashboard'
import { Separator, SimpleText, Title1 } from '@src/Styles'
import React from 'react'

export const Home: React.FC<any> = () => (
  <Dashboard>
    <div className="row justify-content-center align-items-center">
      <div className="col-md-4 col-sm-12">
        <Title1 className="text-end">A forma mais fácil de organizar seu album</Title1>
        <Separator />
        <SimpleText className="text-end mt2">
          Aqui você organiza seu album da copa,
          {' '}
          e não precisa ficar carregando um papel pra cima e pra baixo.
          <br />
          <br />
          Com apenas alguns cliques sabe exatamente o que está faltando.
        </SimpleText>

        <div className="row">
          <div className="col-md-6">
            <Separator />
            <Button fullWidth type="secundary" router="/cadastre-se">cadastre-se</Button>
          </div>
          <div className="col-md-6">
            <Separator />
            <Button fullWidth router="/login">login</Button>
          </div>
        </div>
      </div>
      <div className="col-md-6 col-sm-12">
        <div className="d-block d-md-none">
          <Separator />
        </div>
        <img src="/album.png" alt="Album da Copa 2022" />
      </div>
    </div>
  </Dashboard>
)
