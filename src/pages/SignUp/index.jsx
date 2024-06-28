import { FiMail, FiLock, FiArrowLeft, FiUser } from 'react-icons/fi'
import { Container, Form, Background } from './style';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { api } from '../../services/api'
import { useState } from 'react';

export function SignUp (){
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const navigate = useNavigate()

  function handleSignUp(){
    if(!name || !email || !password){
      alert("Preencha todos os campos")
    }
    api.post("/users", {name, email, password})
    .then(()=> {
      alert('Usuario cadastrado com Sucesso.')
      navigate("/")
    })
    .catch(error => {
      if(error.response){
        alert(error.response.data.message)
      }else{
        alert("Não foi possivel cadastrar.")
      }
    });
  }

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
         onChange={e =>{setName(e.target.value)}}
       />
        <Input
          placeholder="E-mail"
          type="text"
          icon={FiMail}
          onChange={e => setEmail(e.target.value)}
        />
         <Input
          placeholder="Senha"
          type="password"
          icon={FiLock}
          onChange={e => setPassword(e.target.value)}
        />
        
        <Button title="Cadastrar" onClick={handleSignUp}/>
      
        <Link to="/">
        <FiArrowLeft />Voltar para o login
        </Link>

      </Form>

      <Background/>


    </Container>
  );
}