import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  

  display: grid;
  grid-template-rows: 116px auto;
  grid-template-areas:
    "header"
    "content";

  main {
    grid-area: content;
    overflow-y: scroll;
    padding: 64px 0;
  }
`;

export const Content = styled.div`
  max-width: 1137px;
  margin: 0 auto;

  header{
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 37px;

    h1{
      font-size: 32px;
    }
  }



`;
export const SectionMovie = styled.section`
  padding: 32px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: ${({ theme }) => theme.COLORS.GRBA};
  border-radius: 16px;
  text-align: justify;
  gap: 15px;

  margin-bottom: 24px;

  p {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    max-height: 3.6em; 
  }
`;

export const NewMovie = styled(Link)`
  background-color: ${({theme})=> theme.COLORS.PINK};
  color: ${({theme})=> theme.COLORS.BACKGROUND_800};


  display: flex;
  align-items: center;
  justify-content: center;
  height: 48px;

  padding: 32px;
  border-radius: 8px;


  svg{
    margin-right: 8px;
  }


`;