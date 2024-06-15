import { Container, Profile } from './style';
import { Input } from '../Input';

export function Header(){
  return(
    <Container>
      <h1>RocketMovies</h1>
      <Input placeholder="Pesquisar pelo título" />
      <Profile to="/profile">
        <div>
          <strong>Jonilson Mance</strong>
          <span>sair</span>
        </div>
        <img src="https://github.com/jonilsonmance.png" alt="Foto do Usuario" />
      </Profile>
    </Container>
  );
}
