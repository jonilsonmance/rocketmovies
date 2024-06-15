import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.header`
  grid-area: header;
  display: flex;
  align-items: center;
  justify-content: space-between; /* Mantido para melhor alinhamento */
  gap: 64px;
  width: 100%;
  height: 116px;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({ theme }) => theme.COLORS.GRAY_300};
  padding: 24px 123px;

  h1{
    color: ${({ theme }) => theme.COLORS.PINK};
    font-size: 24px;
  }


`;

export const Profile = styled(Link)`
  display: flex;
  align-items: center;

  > img {
    width: 64px;
    height: 64px;
    border-radius: 50%;
  }

  > div {
    display: flex;
    flex-direction: column;
    align-items: flex-end; /* Mantido para alinhar à direita */
    margin-right: 16px;
    line-height: 1.2; /* Ajuste do espaçamento entre linhas */

    strong {
      font-size: 14px;
      color: ${({ theme }) => theme.COLORS.WHITE_200};
      white-space: nowrap; /* Impede a quebra de linha */
    }

    span {
      font-size: 14px;
      color: ${({ theme }) => theme.COLORS.GRAY_100};
      cursor: pointer; /* Indica que é clicável */
    }
  }
`;
