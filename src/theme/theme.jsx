import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  components: {
    Button: {
      baseStyle: {
        fontWeight: 'medium', // consistent style
      },
      variants: {
        solid: {
          bg: '#245b41',
          color: 'white',
          _hover: {
            bg: '#7F8F88',
          },
        },
        ghost: {
          color: '#7F8F88',
          _hover: {
            bg: '#88A179',
          },
        },
      },
      defaultProps: {
        colorScheme: '#7F8F8', // default color scheme
      },
    },
  },
});

export default theme;