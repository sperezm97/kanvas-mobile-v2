import styled from 'styled-components';
import is from 'styled-is';
import { Text as nbText } from 'native-base';
import { fonts, sizes } from '../styles/fonts';
import { colors } from '../styles';

interface Itext {
  color?: string;
  align?: string;
  weight?: number | string;
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
  error?: boolean;
}

const Text = styled(nbText)`

  ${is('headLine')`
    font-size: ${fonts.headline.fontSize}px;
    font-weight: ${fonts.headline.fontWeight};
    color: ${fonts.headline.color};
    text-align: ${({ align }: Itext) => align || 'center'};
  `}

  ${is('title')`
    font-size: ${fonts.title.fontSize}px;
    font-weight: ${fonts.title.fontWeight};
    color: ${fonts.title.color};
    text-align: ${({ align }: Itext) => align || 'center'};
  `}

  ${is('subHeader')`
    font-size: ${fonts.subHeader.fontSize}px;
    font-weight: ${fonts.subHeader.fontWeight};
    color: ${fonts.subHeader.color};
    text-align: ${({ align }: Itext) => align || 'center'};
  `}

  ${is('quote')`
    font-size: ${fonts.quote.fontSize}px;
    font-weight: ${fonts.quote.fontWeight};
    color: ${fonts.quote.color};
    text-align: ${({ align }: Itext) => align || 'center'};
  `}

  ${is('roughBody')`
    font-size: ${fonts.roughBody.fontSize}px;
    font-weight: ${fonts.roughBody.fontWeight};
    color: ${fonts.roughBody.color};
    text-align: ${({ align }: Itext) => align || 'center'};
  `}

  ${is('body')`
    font-size: ${fonts.body.fontSize}px;
    font-weight: ${fonts.body.fontWeight};
    color: ${fonts.body.color};
    text-align: ${({ align }: Itext) => align || 'center'};
  `}

  ${is('secondaryBody')`
    font-size: ${fonts.secondaryBody.fontSize}px;
    font-weight: ${fonts.secondaryBody.fontWeight};
    color: ${({ color }: Itext) => color || fonts.secondaryBody.color};
    text-align: ${({ align }: Itext) => align || 'center'};
  `}

  ${is('placeholder')`
    font-size: ${fonts.placeholder.fontSize}px;
    font-weight: ${fonts.placeholder.fontWeight};
    color: ${fonts.placeholder.color};
    text-align: ${({ align }: Itext) => align || 'center'};
  `}

  ${is('footnote')`
    font-size: ${fonts.footnote.fontSize}px;
    font-weight: ${({ weight }: Itext) => weight || fonts.footnote.fontWeight};
    color: ${({ color }: Itext) => color || fonts.footnote.color};
    text-align: ${({ align }: Itext) => align || 'center'};
  `}

  ${is('button')`
    font-size: ${fonts.button.fontSize}px;
    font-weight: ${fonts.button.fontWeight};
    color: ${({ color }: Itext) => color || fonts.button.color};
    text-align: ${({ align }: Itext) => align || 'center'};
  `}
  ${is('input')`
    font-size: ${sizes.body}px;
    color: ${colors.base};
    padding-bottom: 4px;
  `}

  ${is('gmail')`
  font-weight: bold;
  color: ${colors.gmail};
  `}

  ${is('listItem')`
    font-size: ${fonts.body.fontSize};
    color: ${colors.blackBrand};
    padding-left 8px;
  `}
`;
export default Text;
