import styled from 'styled-components'
import { Link } from 'react-router-dom';

export const Container = styled(Link)`  //  aqui é um button
  display: flex;
  align-items: center;
  gap: 2.5px;
  background: none;
  color: ${({theme})=>theme.COLORS.PINK};

  border:none;
  font-size:16px;


`;