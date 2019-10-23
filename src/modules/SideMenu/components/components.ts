import styled from 'styled-components';
import is from 'styled-is';
import { View as StyledVIew, Text as StyledText } from '@components';
import { colors, sizes } from '@styles';

const View = styled(StyledVIew)`
  ${is('avatar')`
    flex-direction: row;
    padding: 20px 10px;
    background-color: ${colors.base};
  `}

  ${is('logo')`
    margin-bottom: 20px
  `}
`;

const Text = styled(StyledText)`
  ${is('avatar')`
    font-size: ${sizes.subHeader}px;
    color: ${colors.white};
    padding-left: 12px;
    font-weight: bold;
    align-self: center;
  `}
`;

export { View, Text };
