import styled from 'styled-components';
import is from 'styled-is';
import { Icon as lbIcon } from 'native-base';
import { fonts } from '../styles/fonts';

const Icon = styled(lbIcon)`
  ${is('tilte')`
  font-size: ${fonts.quickActions.fontSize}px;
  color: ${fonts.quickActions.color}
  `}

  ${is('icon')`
    font-size: ${fonts.icon.fontSize}px;
    color: ${fonts.icon.color}
  `}
`;
export default Icon;
