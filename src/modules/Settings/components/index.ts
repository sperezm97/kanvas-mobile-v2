import styled from 'styled-components';
import is from 'styled-is';
import { Separator as NbSeparator } from 'native-base';
import { colors } from '@styles';

const Separator = styled(NbSeparator)`
  height: 45px;
  background-color: ${colors.base};
`;

export { Separator };
