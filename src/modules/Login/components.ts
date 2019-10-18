import styled from 'styled-components';
import is from 'styled-is';
import { View as StyledVIew } from '@components';

const View = styled(StyledVIew)`
  ${is('forgot')`
    padding: 40px 0;
  `}

  ${is('social')`
    justify-content: space-between;
    flex-direction: row;
  `}

  ${is('socialText')`
    padding: 40px 0 20px 0;
  `}

  ${is('title')`
    padding: 0 0 30px 0;
  `}

`;

export { View };
