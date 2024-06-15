import { Container, Form, Background } from './style';
import { FiMail, FiLock, FiArrowLeft, FiUser } from 'react-icons/fi'
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { Link } from 'react-router-dom';


export function SignUp (){
  return(
    <Container>

      <Form>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>
        <h2>Crie sua Conta</h2>

        <Input
         placeholder="Nome"
         type="text"
         icon={FiUser}
       />
        <Input
          placeholder="E-mail"
          type="text"
          icon={FiMail}
        />
         <Input
          placeholder="Senha"
          type="password"
          icon={FiLock}
        />
        
        <Button title="Entrar"/>
      
        <Link to="/">
        <FiArrowLeft />Voltar para o login
        </Link>

      </Form>

      <Background/>


    </Container>
  );
}