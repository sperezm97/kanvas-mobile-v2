import styled from 'styled-components/native';
import is from 'styled-is';

const View = styled.View`
  ${is('input')`
    margin: 14px 20px;
  `}
`;

export default View;
