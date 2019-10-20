import styled from 'styled-components';
import { Button as nbButton } from 'native-base';
import { colors } from '../styles';
import is from 'styled-is';

interface Ibutton {
  color?: string;
}

const Button = styled(nbButton)`

  ${is('gmail')`
    max-height: 48px;
    width: 155px;
    background-color: ${colors.white};
    border-width: 4px;
    border-color: ${colors.gmail};
    justify-content: center
  `}

  ${is('facebook')`
    max-height: 48px;
    width: 155px;
    background-color: ${colors.facebook};
    justify-content: center
  `}

  ${is('block', 'bordered')`
    max-height: 48px;
    border-width: 2px;
    border-color: ${colors.base};
  `}

  ${is('block', 'disabled')`
    max-height: 48px;
    background-color: ${colors.midBase};
    border-color: ${colors.base};
  `}
`;

export default Button;
