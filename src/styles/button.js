import { css } from 'styled-components';

export default css`
  button {
    display: flex;
    align-items: center;
    cursor: pointer;
    border: none;
    &:focus {
      outline: none;
    }

    svg {
      margin-right: 8px;
    }
  }
`;
