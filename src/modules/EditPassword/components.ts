import styled from 'styled-components';
import is from 'styled-is';
import { View as StyledVIew } from '@components';
import { colors, sizes } from '@styles';

const View = styled(StyledVIew)`
  ${is('button')`
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
  `}

  ${is('logo')`
    align-items: center;
    margin-bottom: 30px
  `}

  ${is('content')`
    justify-content:space-between;
  `}

`;
export { View };
