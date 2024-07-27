import axios from '@/configs/axios';
import { CAMPAIGNS } from '@/constants/routes';

export const getCampaigns = async (page: number) => {
  try {
    const response = await axios.get(CAMPAIGNS.LIST, {
      params: {
        populate: '*'
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching campaigns:', error);
    return [];
  }
};
