import { Container } from './style';
import React from 'react';

export function AuthorInfo({ imageUrl, authorName }) {
  return (
    <Container>
      <img src={imageUrl} alt={`Foto de ${authorName}`} />
      <span>Por {authorName}</span>
    </Container>
  );
}
