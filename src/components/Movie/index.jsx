import { Container } from './styles';
import { Tags } from '../Tags';
import { Stars } from '../Stars';

export function Movie({ data,renderStars, children, ...rest }) {
  return (
    <Container {...rest}>
      <div>
        <h1>{data.title}</h1>
        {renderStars(data.rating)} {/* Renderizar estrelas aqui */}
      </div>
      <p>{data.description}</p>

      {children}

      {data.tags && (
        <footer>
          {data.tags.map(tag => (
            <Tags key={tag.name} title={tag.name} />
          ))}
        </footer>
      )}
    </Container>
  );
}
