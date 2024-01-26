
import {Container} from './styles'

import { Button } from '../../components/Button'
import { Header } from '../../components/Header'

export function Details() {  
  
  return (
    <Container>
      <Header />
      <h1>Hello World</h1>
      <span>Fragment</span>

      <Button title="Voltar"/>
    </Container>
  )
}