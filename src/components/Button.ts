import styled from 'styled-components';
import { Button as nbButton } from 'native-base';
import { colors } from '../styles';
import is from 'styled-is';

interface ConfigButton {
  bgColor?: string;
  bColor?: string;
}

const Button: React.ElementType = styled(nbButton)`
  ${is('gmail')`
    width: 155px;
    background-color: ${colors.white};
    border: 2px ${(props: ConfigButton) => props.bColor || colors.gmail};
    justify-content: center
  `}

  ${is('facebook')`
    width: 155px;
    background-color: ${colors.facebook};
    justify-content: center
  `}

  ${is('block')`
    background-color: ${(props: ConfigButton) => props.bgColor || colors.base}
  `}

  ${is('block', 'bordered')`
    border: 2px ${(props: ConfigButton) => props.bColor || colors.base};
  `}

  ${is('block', 'disabled')`
    background-color: ${(props: ConfigButton) =>
      props.bgColor || colors.whiteDisable}
    border-color: ${colors.base};
  `}

  ${is('normal')`
    width: 135px;
    height: 25px;
    background-color: ${(props: ConfigButton) => props.bgColor || colors.base}
    justify-content: center;
  `}

  ${is('bordered')`
    justify-content: center;
    border: 2px ${colors.base}
  `}

  ${is('regular')`
    justify-content: center;
    background-color: ${(props: ConfigButton) => props.bgColor || colors.base}
  `}

  `;

export default Button;
