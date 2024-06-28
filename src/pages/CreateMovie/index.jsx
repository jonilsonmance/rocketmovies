import { ButtonText } from '../../components/ButtonText'
import { MovieItem } from '../../components/MovieItem'
import { TextArea } from '../../components/TextArea'
import { Section } from '../../components/Section'
import { Button } from '../../components/Button'
import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { FiArrowLeft } from 'react-icons/fi'
import { Container, Form } from './style'
import { api } from '../../services/api'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export function CreateMovie(){
  const [tags, setTags] = useState([])
  const [newTag, setNewTag] = useState("")
  const [title, setTitle ] = useState("")
  const [description, setDescription ] = useState("")
  const [rating, setRating ] = useState("")

  const navigate = useNavigate()

  function handleAddTag(){
    setTags(prevState => [...prevState, newTag]);
    setNewTag("")
  }

  function handleRemoveTag(deleted){
    setTags(prevState => prevState.filter(tag => tag  !== deleted))
  }
  
  async function handleNewMovie(){
    if(!title){
      alert("Digite o titulo do filme.")
    }
    if(newTag){
      return alert("Vc deixou uma tag no campo para adicionar, mas não clicou em adicionar.Clique para adicionar ou deixe o campo vazio.")
    }

    await api.post("/movie_notes", {
      title, 
      description, 
      rating,
      tags
    })
    alert("Filme Adicionado com Sucesso.")
    navigate(-1)
  }

  function handleBack(){
    navigate(-1)
  }

  return(
    <Container>
      <Header/>

      <main>
        <Form>

        <header>
            <ButtonText 
              onClick={handleBack}
            title="Voltar">
            <FiArrowLeft />
          </ButtonText>

        <h1>Novo Filme</h1>
        </header>
        <div className="input-title">
          <Input
            placeholder="Título"
            onChange={e => setTitle(e.target.value)}
          />
          <Input
            placeholder="Sua nota(de 0 a 5)"
            onChange={e => setRating(e.target.value)}
          />
        </div>

        <TextArea 
          placeholder="Observações"
          onChange={e => setDescription(e.target.value)}
        />

        <Section title="Marcadores">

          <div className="tags">
            {
              tags.map((tag, index)=> (
                <MovieItem 
                  key={String(index)}
                  value={tag}
                  onClick={()=>handleRemoveTag(tag)}
                  
                />
              ))
            }

            <MovieItem 
              isNew 
              placeholder="Novo marcador"
              onChange={e => setNewTag(e.target.value)}
              value={newTag}
              onClick={handleAddTag}
            />
          </div>
        </Section>

        <div className="buttons">
          <Button title="Excluir Filme"/>
          <Button 
            title="Salvar alterações" 
            onClick={handleNewMovie}
          />
        </div>

        </Form>
      </main>

    </Container>
  )
}