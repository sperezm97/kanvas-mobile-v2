import styled from 'styled-components';
import { Button as nbButton } from 'native-base';
import { colors } from '../styles';
import is from 'styled-is';

interface Ibutton {
  color?: string;
}

const Button = styled(nbButton)`
  max-height: 48px;
  background-color: ${({ color }: Ibutton) => color || colors.base};

  ${is('gmail')`
    width: 155px;
    background-color: ${colors.white};
    border-width: 4px;
    border-color: ${colors.gmail};
    justify-content: center
  `}

  ${is('facebook')`
    width: 155px;
    background-color: ${colors.facebook};
    justify-content: center
  `}

  ${is('block', 'bordered')`
    border-width: 2px;
    border-color: ${colors.base};
  `}

  ${is('block', 'disabled')`
    background-color: ${colors.midBase};
    border-color: ${colors.base};
  `}
`;

export default Button;
