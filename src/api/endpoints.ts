import axios from 'axios';
import { BASE_URL } from '../config/api/api.config';

export const API = {
  currency: {
    getCurrency: params => axios.get(`${BASE_URL}/exchangerates/tables/${params.table}/?format=json`)
  }
};
