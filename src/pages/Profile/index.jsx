import { FiMail, FiLock, FiArrowLeft, FiUser, FiCamera } from 'react-icons/fi'
import { ButtonText } from '../../components/ButtonText';
import { Container, Form, Avatar } from './style';
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'


export function Profile(){
  return(
    <Container>

      <header>
      <ButtonText to="/"
            title="Voltar">
            <FiArrowLeft />
      </ButtonText>
       
      </header>

      <Form>
        <Avatar>
          <img 
            src="https:github.com/jonilsonmance.png"
            alt="Foto do Usuario" 
          />

          <label htmlFor="avatar">
            <FiCamera/>
            <input 
              id="avatar"
              type="text"
            />
          </label>
        </Avatar>

        <Input
        type = "text"
        placeholder="Jonilson Mance"
        icon={FiUser}
        />
        <Input
        type = "text"
        placeholder="jonilson@gmail.com"
        icon={FiMail}
        />

        <Input
        type = "password"
        placeholder="Senha atual"
        icon={FiLock}
        />

        <Input
        type = "password"
        placeholder="Nova senha"
        icon={FiLock}
        />

        <Button title="Salvar"/>
      </Form>

    </Container>
  )
}