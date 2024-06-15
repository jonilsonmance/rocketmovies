import styled from 'styled-components'

export const Container = styled.span`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 16px;

  > svg{
    color: ${({theme})=> theme.COLORS.PINK};
  }


`;