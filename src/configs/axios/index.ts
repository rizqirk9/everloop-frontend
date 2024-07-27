import axios from 'axios';

import errorHandler from './errorHandler';
import { getFromStorage } from '@/utils/localStorage';

const token = getFromStorage('token');

const instance = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_API_URL}`,
  headers: {
    'X-CSRF-TOKEN': document.head
      .querySelector('meta[name="csrf-token"]')
      ?.getAttribute('content'),
    'Access-Control-Allow-Origin': '*',
  }
});

if (token) instance.defaults.headers.common.authorization = `Bearer ${token}`;
else delete instance.defaults.headers.common.authorization;

instance.interceptors.response.use(response => response, errorHandler);

export { default as setAuthorizationHeader } from './setAuthorizationHeader';

export default instance;
