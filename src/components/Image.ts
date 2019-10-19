import styled from 'styled-components/native';
import is from 'styled-is';

interface Image {
  height?: number;
  width?: number;
}
const Image = styled.Image`
  ${is('logo')`
    align-self: ${({ align }: Image) => align || 'center'}
  `}
`;

export default Image;
