import styled from 'styled-components';

export const List = styled.ul`
  width: 400px;
  padding: 8px;

  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 8px;

    button {
      cursor: pointer;
      :hover {
        color: white;
        background-color: orangered;
      }
    }
  }
`;
