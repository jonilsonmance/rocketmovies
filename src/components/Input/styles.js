import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  background-color: ${({theme})=>theme.COLORS.BACKGROUND_700};
  color: ${({theme})=>theme.COLORS.GRAY_100};

  border-radius:10px;

  >input{
    height:56px ;
    width: 100%;

    padding: 19px 24px ;

    color: ${({theme})=>theme.COLORS.WHITE};
    background: transparent;
    border: 0;

    &:placeholder{
      color: ${({theme})=>theme.COLORS.GRAY_100};
      font-size: 14px;
    }

  }
  >svg{
    margin-left: 16px;
  }

`