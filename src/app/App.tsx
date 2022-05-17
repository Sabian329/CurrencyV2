import * as React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { globalTheme } from '../config/style/globalStyles';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Layout } from '../components/Layout';
import { Provider } from 'react-redux';
import { store } from '../config/redux/store';

const queryClient = new QueryClient();

export const App = () => {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <ChakraProvider theme={globalTheme}>
          <Layout />
        </ChakraProvider>
      </QueryClientProvider>
    </Provider>
  );
};
