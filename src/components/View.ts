import styled from 'styled-components/native';
import is from 'styled-is';

const View = styled.View`
  ${is('input')`
    margin: 4px 14px;
  `}

  ${is('header')`
    justify-content: center
  `}

  ${is('footer')`
    ustify-content: center
  `}
`;

export default View;
