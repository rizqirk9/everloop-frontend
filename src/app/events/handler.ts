import axios from '@/configs/axios';
import { EVENT } from '@/constants/api';

export const getEvents = async () => {
  const res = await axios.get(EVENT.find);
  
  return res.data.data;
};
