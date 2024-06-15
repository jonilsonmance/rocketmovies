import { ButtonText } from '../../components/ButtonText'
import { MovieItem } from '../../components/MovieItem'
import { TextArea } from '../../components/TextArea'
import { Section } from '../../components/Section'
import { Button } from '../../components/Button'
import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { FiArrowLeft } from 'react-icons/fi'
import { Container, Form } from './style'
import { Link } from 'react-router-dom'

export function CreateMovie(){
  return(
    <Container>
      <Header/>

      <main>
        <Form>

        <header>
            <ButtonText to="/" 
            title="Voltar">
            <FiArrowLeft />
          </ButtonText>

        <h1>Novo Filme</h1>
        </header>
        <div className="input-title">
          <Input
            placeholder="Título"
          />
          <Input
            placeholder="Sua nota(de 0 a 5)"
          />
        </div>

        <TextArea placeholder="Observações"/>

        <Section title="Marcadores">
          <div className="tags">
            <MovieItem value="React"/>
            <MovieItem isNew placeholder="Novo marcador"/>
          </div>
        </Section>

        <div className="buttons">
          <Button title="Excluir Filme"/>
          <Button title="Salvar alterações"/>
        </div>

        </Form>
      </main>


    </Container>
  )
}