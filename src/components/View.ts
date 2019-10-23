import styled from 'styled-components/native';
import is from 'styled-is';
import { colors } from '@styles';

const View = styled.View`
  ${is('input')`
    margin: 4px 14px;
  `}

  ${is('header')`
    justify-content: center
  `}

  ${is('footer')`
    justify-content: center
  `}

  ${is('separator')`
    border-width: 0.5px;
    border-color: ${colors.lightGrey}
    margin: 5px 0;
`}
`;

export default View;
