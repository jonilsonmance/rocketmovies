import { Container, Content, NewMovie } from './styles';
import { IoIosStar, IoIosStarOutline } from 'react-icons/io';
import { Header } from '../../components/Header';
import { FiPlus } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import { Movie } from "../../components/Movie"
import { Section } from '../../components/Section';
import { useEffect, useState } from 'react';
import { api } from '../../services/api';


export function Home() {
  
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredMovies, setFilteredMovies] = useState([]); 

  const navigate = useNavigate();


  useEffect(() => {
    async function fetchMovies() {
      const response = await api.get(`/movie_notes`);
      setMovies(response.data);
    }
    fetchMovies();
  }, []);

  useEffect(() => {
    const filtered = movies.filter(movie =>
      movie.title.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredMovies(filtered);
  }, [search, movies]); 



  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<IoIosStar key={i} />);
      } else {
        stars.push(<IoIosStarOutline key={i} />);
      }
    }
    return stars;
  };
  
  function handleDetails(id){
    navigate(`/details/${id}`)
  }

  return (
    <Container>
        <Header setSearch={setSearch} /> 
      <main>
        <Content>
          <header>
            <h1>Meus Filmes</h1>
            <NewMovie to="/create">
              <FiPlus/>
              Adicionar filme
            </NewMovie>
          </header>

          <Section>
            {filteredMovies.map(movie => (
              <Movie
                key={String(movie.id)}
                data={{
                  title: movie.title,
                  rating: movie.rating,
                  description: movie.description,
                  tags: movie.tags.map(tag => ({ id: tag.id, name: tag.name }))
                }}
                renderStars={renderStars} // Passando a função renderStars
                onClick={() => handleDetails(movie.id)}
              />
            ))}
          </Section>
        
        </Content>
      </main>
    </Container>
  );
}
