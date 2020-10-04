import styled from 'styled-components';
import Flex from 'common/Flex';
import highlight from 'styles/highlight';

export const Item = styled(Flex)`
  position: relative;
  cursor: pointer;
  align-items: center;
  height: 20px;
  padding: 0 20px;
  margin: 12px 0;
  user-select: none;

  &.selected {
    &::before {
      content: '';
      position: absolute;
      left: 0;

      ${highlight};
    }
  }
`;
