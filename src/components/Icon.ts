import styled from 'styled-components';
import is from 'styled-is';
import { Icon as lbIcon } from 'native-base';
import { fonts, colors } from '@styles';

const Icon = styled(lbIcon)`
  ${is('title')`
    font-size: ${fonts.quickActions.fontSize}px;
    color: ${fonts.quickActions.color}
  `}

  ${is('listItem')`
    font-size: 22px;
    color: ${colors.base}
  `}
`;
export default Icon;
