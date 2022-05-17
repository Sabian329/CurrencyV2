import React from 'react';
import { Button, Text } from '@chakra-ui/react';
import { useState } from 'react';
import { useCurrencyQuery } from '../../api/queries/useCurrencyQuery';
import { queryConfig } from '../../config/api/query.config';
import { LayoutWrapper } from './styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectMessage } from '../../config/redux/selectors';

export const Layout = () => {
  const [queryState, setQueryState] = useState(queryConfig.tables.a);
  const { isLoading, isSuccess, status, data } = useCurrencyQuery(queryState);
  const store = useSelector(selectMessage);

  console.log(store);

  return (
    <LayoutWrapper>
      <Text>click to check</Text>
      <Button bg="green" onClick={() => setQueryState(queryConfig.tables.b)}>
        here
      </Button>
    </LayoutWrapper>
  );
};
