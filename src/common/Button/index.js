import styled from 'styled-components';
import { space } from 'styled-system';
import {
  altBlue,
  altCoral,
  altGray,
  altGreen,
  blue,
  coral,
  gray,
  green,
  white,
} from 'styles/colors';

const Button = styled.button`
  height: 36px;
  border-radius: 4px;
  padding: 0 16px;
  color: ${white};

  &.edit {
    background-color: ${green};

    &:hover {
      background-color: ${altGreen};
    }
  }

  &.save {
    background-color: ${blue};

    &:hover {
      background-color: ${altBlue};
    }
  }

  &.cancel {
    background-color: ${gray};

    &:hover {
      background-color: ${altGray};
    }
  }

  &.delete {
    background-color: ${coral};

    &:hover {
      background-color: ${altCoral};
    }
  }

  ${space};
`;

Button.displayName = 'Button';

export default Button;
