import styled from 'styled-components';
import Box from 'common/Box';

export const Item = styled(Box)`
  cursor: pointer;

  &.selected {
    color: #004085;
    background-color: #cce5ff;
  }
`;
