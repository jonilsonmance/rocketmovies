import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  
  display: grid;
  grid-template-rows: 116px auto ;

  grid-template-areas:
  "header"
  "content";

  main{
    grid-area: content;
    overflow-y: scroll;
  
  }

  .tags{
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    padding: 16px;
    gap: 24px;
    border-radius: 10px;
    background-color: ${({theme})=> theme.COLORS.BACKGROUND_900};
    
  }
`;

export const Form = styled.form`
  max-width: 1137px;
  margin: 40px auto;


header{
  display: flex;
  flex-direction: column;
  justify-content: start;

  h1{
    font-size: 36px;
    color:${({theme})=> theme.COLORS.WHITE_200};
    margin-top: 24px;

  }
  }

  .input-title{
    display: flex;
    gap: 40px;
    margin-top: 40px;
    
  }

  .buttons{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 40px;
    margin-top: 10px;
  }
  .buttons >:first-child{
    background-color: ${({theme})=> theme.COLORS.BACKGROUND_900};
    color: ${({theme})=> theme.COLORS.PINK};
  }

    svg{
      color:${({theme})=> theme.COLORS.PINK};
      margin-right: 5px;
    }
  
`;

