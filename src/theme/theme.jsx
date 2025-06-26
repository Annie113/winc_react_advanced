import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    customGreen: {
      100: '#CDE4DA',
      500: '#245b41',
      700: '#1A3E30',
    },
  },
  components: {
    Button: {
      baseStyle: {
        fontWeight: 'medium',
      },
      variants: {
        solid: {
          bg: 'customGreen.500',
          color: 'white',
          _hover: {
            bg: 'customGreen.700',
          },
        },
        ghost: {
          color: 'customGreen.500',
          _hover: {
            bg: 'customGreen.100',
          },
        },
      },
      defaultProps: {
        colorScheme: 'customGreen',
        variant: 'solid',
      },
    },
    Link: {
      variants: {
        social: {
          color: 'white',
          _hover: {
            color: '#dadbdd',
          },
        },
      },
    },
  },
});

export default theme;
