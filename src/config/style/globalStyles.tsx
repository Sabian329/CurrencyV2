import { extendTheme } from '@chakra-ui/react';

export const globalTheme = extendTheme({
  styles: {
    global: {
      body: {
        bg: 'gray.600',
        color: 'white',
        margin: 0,
        height: '100%',
        width: '100%'
      },

      a: {
        color: 'teal.500',
        _hover: {
          textDecoration: 'underline'
        }
      }
    }
  }
});
