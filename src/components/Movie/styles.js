import styled from 'styled-components'

export const Container = styled.button`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.GRBA};
  display: flex;
  flex-direction: column;
  text-align: start;
  gap: 15px;

  border-radius: 10px;
  border: none;

  padding: 32px;
  margin-bottom: 16px;
  
  

 

  h1{
  font-weight: 700;
  font-size: 24px;
  color: ${({theme})=> theme.COLORS.WHITE};
  margin-bottom: 8px;
  }

  svg {
    color: ${({ theme }) => theme.COLORS.PINK};
    font-size: 12px;
    margin-left:6px;
  }

  

  p {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    max-height: 3.6em; 
    color: ${({theme})=> theme.COLORS.WHITE};
  }
  > footer{
    width: 100%;
    display: flex;
  }
  
`;
