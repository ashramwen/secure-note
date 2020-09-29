import styled from 'styled-components';
import { gray } from 'styles/colors';

const Divider = styled.div`
  width: 100%;
  margin: 24px 0;
  border-bottom: 1px solid ${gray};
`;

Divider.displayName = 'Divider';

export default Divider;
