import { colors } from '.';

const globalStyles = {
  content: {
    flex: 1,
    flexDirection: 'column',
    margin: 12,
  },
  carrousel: {
    activeDot: {
      width: 10,
      height: 10,
      borderRadius: 5,
      marginLeft: 2.5,
      backgroundColor: colors.base,
    },
    inactiveDot: {
      width: 10,
      height: 10,
      borderRadius: 5,
      marginLeft: 2.5,
      backgroundColor: colors.midBase,
    },
  },
};
export default globalStyles;
