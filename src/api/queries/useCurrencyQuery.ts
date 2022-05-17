import React from 'react';
import { useQuery } from 'react-query';
import { API } from '../endpoints';

const getCurrency = async params => {
  const data = await API.currency.getCurrency({ table: params.queryKey[0] });
  return data;
};

export const useCurrencyQuery = (params: string, queryConfig = {}) => {
  return useQuery([params], getCurrency, queryConfig);
};
