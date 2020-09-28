import styled from 'styled-components';
import {
  compose,
  space,
  color,
  layout,
  border,
  background,
  position,
  shadow,
} from 'styled-system';

const styleProps = compose(
  space,
  layout,
  border,

  color,
  background,
  position,
  shadow
);

const Box = styled('div')({ boxSizing: 'border-box' }, styleProps);

Box.displayName = 'Box';

export default Box;
