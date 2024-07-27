import axios from '@/configs/axios';
import { CAMPAIGNS } from '@/constants/api';

export const getCampaign = async (uuid: string) => {
  const res = await axios.get(`${CAMPAIGNS.find}/${uuid}?populate[banner]`);

  return res.data;
};
