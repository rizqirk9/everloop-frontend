import axios from '@/configs/axios';
import { AUTH } from '@/constants/api';
import { saveToStorage } from '@/utils/localStorage'
import { FieldValues } from 'react-hook-form';

export const login = async (data: FieldValues) => {
  const { username, password } = data;

  const response = await axios.post(AUTH.login, {
    identifier: username,
    password
  });
  
  saveToStorage('token', response.data.jwt);

  return response;
};
