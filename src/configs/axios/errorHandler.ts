import { AxiosError } from 'axios';

export default function errorHandler(error: AxiosError) {
  if (error) {
    return Promise.reject(error.response);
  }
}
