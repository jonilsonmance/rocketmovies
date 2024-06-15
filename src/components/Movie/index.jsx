import { Container } from './styles';
import { Tags } from '../Tags';

export function Movie({ data, children, ...rest }) {
  return (
    <Container {...rest}>
      <h1>{data.title}</h1>

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
