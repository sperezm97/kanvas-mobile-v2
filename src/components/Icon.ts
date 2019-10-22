import styled from 'styled-components';
import is from 'styled-is';
import { Icon as lbIcon } from 'native-base';
import { fonts, colors } from '@styles';

const Icon = styled(lbIcon)`
  ${is('title')`
    font-size: ${fonts.quickActions.fontSize}px;
    color: ${({ color }: { color?: string }) =>
      color || fonts.quickActions.color}
    padding-left: 8px;
  `}

  ${is('listItem')`
    font-size: 18px;
    color: ${colors.base};
  `}

  ${is('button')`
    font-size: 16px;
    color: ${({ color }: { color?: string }) => color || colors.base}
  `}

  ${is('searchBar')`
    font-size: 30px
    color: ${({ color }: { color?: string }) => color || colors.white}
    align-self: center;
    margin: 0 8px 0 8px;

  `}

`;
export default Icon;
