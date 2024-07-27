import axios from '@/configs/axios';
import { FORUM } from '@/constants/api';

export const getForums = async () => {
  const res = await axios.get(FORUM.find);

  return res.data.data;
};
