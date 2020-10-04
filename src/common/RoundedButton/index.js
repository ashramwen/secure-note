import styled from 'styled-components';
import { layout, space } from 'styled-system';
import { blue, gray, white } from 'styles/colors';

const RoundedButton = styled.button`
  padding: 15px 16px;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  background-color: ${white};
  border-radius: 24px;

  svg {
    fill: ${blue};
  }

  &:hover {
    box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.3);
  }

  &:disabled {
    color: ${gray};
    box-shadow: none;

    svg {
      fill: ${gray};
    }
  }

  ${space};
  ${layout};
`;

RoundedButton.displayName = 'RoundedButton';

export default RoundedButton;
