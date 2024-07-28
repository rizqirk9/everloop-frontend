import axios from '@/configs/axios';
import { CAMPAIGNS } from '@/constants/routes';

export const getCampaigns = async (page: number, type?: string) => {
  const filter = () => {
    switch (type) {
      case 'donor':
        return {
          'filters[type]': 'donor'
        };
        break;
      case 'volunteer':
        return {
          'filters[type]': 'volunteer'
        };

      default:
        break;
    }
  };

  try {
    const response = await axios.get(CAMPAIGNS.LIST, {
      params: filter()
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching campaigns:', error);
    return [];
  }
};
