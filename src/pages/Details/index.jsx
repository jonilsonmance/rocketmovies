import avatarPlaceholder from '../../assets/avatar_placeholder.svg'
import { IoIosStar, IoIosStarOutline } from 'react-icons/io';
import { useNavigate, useParams } from 'react-router-dom';
import { AuthorInfo } from '../../components/AuthorInfo';
import { ButtonText } from '../../components/ButtonText'
import { Datetime } from '../../components/Datetime';
import { Header } from '../../components/Header'
import { FiArrowLeft,  } from 'react-icons/fi';
import { Container, Content } from './styles';
import { Tags } from '../../components/Tags';
import { useEffect, useState } from 'react';
import { api } from '../../services/api';

export function Details (){
  const [data, setData] = useState(null);
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchMovie() {
      try {
        const response = await api.get(`/movie_notes/${params.id}`);
        setData(response.data);
      } catch (error) {
        console.error('Failed to fetch movie details', error);
      }
    }
    fetchMovie();
  }, [params.id]);

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

  function handleBack(){
    navigate(-1)
  }

  return(
    <Container>

      <Header/>

    {  
      data &&
      <main>
        <Content>

            <ButtonText 
              onClick={handleBack} 
              title="Voltar">
              <FiArrowLeft />
            </ButtonText>

          <div className="title">
            <div className="icons">
            <h1>{data.title}</h1>
            {renderStars(data.rating)} 
             
            </div>

              {data.user && (
                <div className="outhor-time">
                
                  <AuthorInfo
                    imageUrl={data.user.avatar ? `${api.defaults.baseURL}/files/${data.user.avatar}` : avatarPlaceholder} 
                    authorName={data.user.name} 
                    />
                  <Datetime dateTime={data.user.created_at}/>
                  
                </div>
              )}         

            </div>

          {data.tags && (
            <div className="tags">
              {data.tags.map(tag => (
                <Tags key={String(tag.id)} title={tag.name} />
              ))}
            </div>
          )}

          <p>{data.description}</p>

        </Content>
      </main>
    
    }
    
    </Container>

  )
}