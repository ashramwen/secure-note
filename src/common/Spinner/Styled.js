import styled, { keyframes } from 'styled-components';

const spinner = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const Wrapper = styled.div`
  animation: ${spinner} 1.6s linear infinite;
`;
