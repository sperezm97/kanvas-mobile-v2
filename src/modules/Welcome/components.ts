import styled from 'styled-components';
import is from 'styled-is';
import { View as StyledVIew } from '@components';
import { colors } from '@styles';

const View = styled(StyledVIew)`
  ${is('slide')`
    height: 300px;
    width: 300px;
    border-Radius: 10px;
    background-color: ${colors.lightBase};
    align-items: center;
    justify-content: center;
  `}
  ${is('button')`
    margin: 5px 0;
  `}

  ${is('container')`
  `}
`;

export { View };
