import axios from '@/configs/axios';
import { FORUM } from '@/constants/api';
import { PaginationType } from '@/types'

export const getForums = async (page: number) => {
  const res = await axios.get(`${FORUM.find}?pagination[page]=${page}`);

  return res.data;
};
