import styled from 'styled-components/native';
import is from 'styled-is';

interface Image {
  height?: number;
  width?: number;
  align?: string;
}
const Image = styled.Image`
  ${is('logo')`
    height: 100px;
    width: 100px;
    resize-mode: contain;
    align-self: ${({ align }: Image) => align || 'center'}
  `}
`;

export default Image;
