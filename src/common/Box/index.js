import styled from 'styled-components';
import {
  compose,
  space,
  layout,
  color,
  border,
  background,
  position,
  typography,
} from 'styled-system';

const styleProps = compose(
  space,
  layout,
  color,
  border,
  background,
  position,
  typography
);

const Box = styled.div`
  box-sizing: border-box;

  ${styleProps}
`;

Box.displayName = 'Box';

export default Box;
