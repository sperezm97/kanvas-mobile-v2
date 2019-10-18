import colors from './colors';

////////////////////////////////////////////////////////
//                   GLOBAL FONTS                    //
//////////////////////////////////////////////////////

export const sizes = {
  headline: 40,
  title: 30,
  subHeader: 18,
  quote: 20,
  roughBody: 14,
  body: 14,
  smallBody: 12,
  footnote: 10,
};

export const fonts = {
  headline: {
    fontSize: 40,
    fontWeight: 'bold',
    color: colors.blackBrand,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.base,
  },
  subHeader: {
    fontSize: 18,
    fontWeight: 'regular',
    color: colors.blackBrand,
  },
  quote: {
    fontSize: 20,
    fontWeight: 'italic',
    color: colors.midGrey,
  },
  roughBody: {
    fontSize: 14,
    fontWeight: 'bold',
    color: colors.blackBrand,
  },
  body: {
    fontSize: 14,
    fontWeight: 'regular',
    color: colors.blackBrand,
  },
  secondaryBody: {
    fontSize: 12,
    fontWeight: 500,
    color: colors.midGrey,
  },
  placeholder: {
    fontSize: 12,
    fontWeight: 'italic',
    color: colors.midGrey,
  },
  footnote: {
    fontSize: 14,
    fontWeight: 700,
    color: colors.blackBrand,
  },
  button: {
    fontSize: 14,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    color: colors.white,
  },
  // Title Icons
  quickActions: {
    fontSize: 22,
    color: colors.base,
  },
  // List/ tables/ Inputs iconst
  icon: {
    fontSize: 16,
    color: colors.base,
  },
};
