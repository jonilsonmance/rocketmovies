import styled from 'styled-components'

export const Container = styled.div`
  max-width:100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 116px auto;
  grid-template-areas:
  "header"
  "content";

  main{
    grid-area: content;
    overflow-y: scroll;
    padding: 64px 0;

  }

`;

export const Content = styled.div`
  max-width: 1137px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  text-align: justify;
  gap: 40px;

  .icons{
    display: flex;
    align-items: center;
    text-align: center;
    gap: 10px;
    margin-bottom: 24px;

    h1{
      font-size: 36px;
      margin-right: 9px;

    }

    svg{
      color: ${({theme})=> theme.COLORS.PINK};
      font-size:20px;
      
    }
  }

  .outhor-time{
      display: flex;
      align-items: center;
      gap: 8px;
    }

`;

