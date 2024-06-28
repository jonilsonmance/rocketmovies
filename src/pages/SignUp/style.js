import styled from 'styled-components'
import backgroundImg from '../../assets/backgroundImg.png'

export const Container  = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`;

export const Form = styled.form`
  padding: 0 134px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  text-align: center;

  h1{
    font-size: 48px ;
    color: ${({theme})=> theme.COLORS.PINK};
  }

  h2{
    font-size: 24px;
    color: ${({theme})=> theme.COLORS.WHITE_200};
    margin: 48px 0;

  }

  p{
    font-size: 14px;
    color: ${({theme})=> theme.COLORS.WHITE_300};
  }

  a{
    font-size: 16px;
    display: flex;
    align-items:center;
    justify-content: center;
    color: ${({theme})=> theme.COLORS.PINK};
    align-self: center; 
    margin-top: 42px;

    svg{
    margin-right: 8px;
    }

  }

  & > *:nth-child(n + 4) {
    margin-bottom: 8px;
  }

`;

export const Background = styled.div` 
  flex: 1;
  background: url(${backgroundImg}) no-repeat center center;
  background-size: cover;

`;
