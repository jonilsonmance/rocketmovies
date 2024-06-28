import avatarPlaceholder from '../../assets/avatar_placeholder.svg';
import { Container, Profile, Search } from './style';
import { useNavigate } from 'react-router-dom';
import { Input } from '../../components/Input';
import { useAuth } from '../../hooks/auth';
import { FiSearch } from 'react-icons/fi';
import { api } from '../../services/api';
import React from 'react';

export function Header({ setSearch }) { // Accept setSearch as prop
  const { signOut, user } = useAuth();
  const navigate = useNavigate();

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;

  async function handleSignOut() {
    await signOut();
    navigate("/");
  }

  return (
    <Container>
      <h1>RocketMovies</h1>
      
      <Search>
        <Input 
          icon={FiSearch} 
          placeholder="Buscar pelo título" 
          onChange={e => setSearch(e.target.value)}
        />
      </Search>

      <Profile to="/profile">
        <div>
          <strong>{user.name}</strong>
          <button onClick={handleSignOut}>Sair</button>
        </div>
        <img src={avatarUrl} alt={user.name} />
      </Profile>
    </Container>
  );
}

