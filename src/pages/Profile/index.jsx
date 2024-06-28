import { FiMail, FiLock, FiArrowLeft, FiUser, FiCamera } from 'react-icons/fi'
import avatarPlaceholder from '../../assets/avatar_placeholder.svg'
import { ButtonText } from '../../components/ButtonText';
import { Container, Form, Avatar } from './style';
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import { useAuth } from '../../hooks/auth'
import { api } from '../../services/api'
import { useState } from 'react';

export function Profile(){
  const { user, updateProfile } = useAuth()

  const [name, setName] = useState(user.name)
  const [email, setEmail] = useState(user.email)
  const [passwordOld, setPasswordOld] = useState()
  const [passworsNew, setPasswordNew] = useState()

  const avatarUrl = user.avatar? `${api.defaults.baseURL}/files/${user.avatar}`: avatarPlaceholder;

  const [avatar, setAvatar] = useState(avatarUrl)
  const [avatarFile, setAvatarFile] = useState(null)
  
  async function handleUpdate(){
    const updated = {
      name, 
      email, 
      password:passworsNew,
      old_password: passwordOld,
    }
    const userUpdated = Object.assign(user,updated)
    await updateProfile({user:userUpdated, avatarFile})
  }

  function handleChangeAvatar(event){
    const file = event.target.files[0];
    setAvatarFile(file);

    const imagePreview = URL.createObjectURL(file);
    setAvatar(imagePreview)
  }

  return(
    <Container>

      <header>
      <ButtonText
        to="/"
        title="Voltar">
        <FiArrowLeft />
      </ButtonText>
       
      </header>

      <Form>
        <Avatar>
          <img 
            src={avatar}
            alt="Foto do Usuario" 
          />

          <label htmlFor="avatar">
            <FiCamera/>
            <input 
              id="avatar"
              type="file"
              onChange={handleChangeAvatar}
            />
          </label>
        </Avatar>

        <Input
          type = "text"
          placeholder="Jonilson Mance"
          icon={FiUser}
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <Input
          type = "text"
          placeholder="jonilson@gmail.com"
          icon={FiMail}
          value={email}
          onChange={e => setEmail(e.target.value)}
        />

        <Input
          type = "password"
          placeholder="Senha atual"
          icon={FiLock}
          onChange={ e => setPasswordOld(e.target.value)}
        />

        <Input
          type = "password"
          placeholder="Nova senha"
          icon={FiLock}
          onChange={e => setPasswordNew(e.target.value)}
        />

        <Button title="Salvar" onClick={handleUpdate}/>
      </Form>

    </Container>
  )
}