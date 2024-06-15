// src/components/AuthorInfo/index.jsx
import React from 'react';
import { Container } from './style';

export function AuthorInfo({ imageUrl, authorName }) {
  return (
    <Container>
      <img src={imageUrl} alt={`Foto de ${authorName}`} />
      <span>Por {authorName}</span>
    </Container>
  );
}
