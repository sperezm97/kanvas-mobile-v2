import styled from 'styled-components';
import is from 'styled-is';
import { Text as nbText } from 'native-base';
import { fonts } from '../styles/fonts';

export const Text = styled(nbText)`

  ${is('headLine')`
    font-size: ${fonts.headline.fontSize}px;
    font-weight: ${fonts.headline.fontWeight};
    color: ${fonts.headline.color}
  `}

  ${is('title')`
  font-size: ${fonts.title.fontSize}px;
  font-weight: ${fonts.title.fontWeight};
  color: ${fonts.title.color}
  `}

  ${is('subHeader')`
  font-size: ${fonts.subHeader.fontSize}px;
  font-weight: ${fonts.subHeader.fontWeight};
  color: ${fonts.subHeader.color}
  `}

  ${is('quote')`
  font-size: ${fonts.quote.fontSize}px;
  font-weight: ${fonts.quote.fontWeight};
  color: ${fonts.quote.color}
  `}

  ${is('roughBody')`
  font-size: ${fonts.roughBody.fontSize}px;
  font-weight: ${fonts.roughBody.fontWeight};
  color: ${fonts.roughBody.color}
  `}

  ${is('body')`
  font-size: ${fonts.body.fontSize}px;
  font-weight: ${fonts.body.fontWeight};
  color: ${fonts.body.color}`}

  ${is('secondaryBody')`
  font-size: ${fonts.secondaryBody.fontSize}px;
  font-weight: ${fonts.secondaryBody.fontWeight};
  color: ${fonts.secondaryBody.color}`}

  ${is('placeholder')`
  font-size: ${fonts.placeholder.fontSize}px;
  font-weight: ${fonts.placeholder.fontWeight};
  color: ${fonts.placeholder.color}`}

  ${is('footnote')`
  font-size: ${fonts.footnote.fontSize}px;
  font-weight: ${fonts.footnote.fontWeight};
  color: ${fonts.footnote.color}`}

  ${is('button')`
  font-size: ${fonts.button.fontSize}px;
  font-weight: ${fonts.button.fontWeight};
  color: ${fonts.button.color}`}

`;
