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
    
    h1{
      font-size: 32px;
    }
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