import styled from 'styled-components/native';
import is from 'styled-is';

const View = styled.View`
  ${is('input')`
    margin: 0 10px;
  `}
`;

export default View;
