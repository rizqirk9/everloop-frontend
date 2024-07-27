import axios from '@/configs/axios';
import { CAMPAIGNS, FORUM } from '@/constants/api';

export const getForums = async () => {
  const res = await axios.get(FORUM.find);

  return res.data.data;
};

export const getCampaigns = async () => {
  const res = await axios.get(CAMPAIGNS.find, {
    params: {
      populate: '*'
    }
  });

  return res.data.data;
};
