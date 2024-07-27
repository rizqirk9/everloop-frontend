import axios from '@/configs/axios';
import { FORUM } from '@/constants/api';

export const getForum = async (uuid: string) => {
  const res = await axios.get(`${FORUM.find}/${uuid}`);

  return res.data;
};
