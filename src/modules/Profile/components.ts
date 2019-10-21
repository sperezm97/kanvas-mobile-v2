import styled from 'styled-components';
import is from 'styled-is';
import { View as StyledVIew, Text as StyledText } from '@components';
import { colors, sizes } from '@styles';

const View = styled(StyledVIew)`
  ${is('avatar')`
    align-items: center;
    padding: 20px 0;
  `}

  ${is('button')`
    align-items: center;
    margin-bottom: 20px;
  `}
`;

const Text = styled(StyledText)`
  ${is('button')`
    padding-right: 12px;
  `}
`;

export { View, Text };
