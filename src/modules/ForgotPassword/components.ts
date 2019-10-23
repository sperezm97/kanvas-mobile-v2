import styled from 'styled-components';
import is from 'styled-is';
import { View as StyledVIew, Text as StyledText } from '@components';
import { colors, sizes } from '@styles';

const View = styled(StyledVIew)`
  ${is('title')`
    padding: 0 0 50px 0;
  `}

  ${is('input')`
    margin: 30px 0 30px 0;

  `}
`;

const Text = styled(StyledText)`
  ${is('placeholder', 'forgot')`
    padding-left: 16px
  `}
`;
export { View, Text };
