import axios from '@/configs/axios';
import { CAMPAIGNS } from '@/constants/routes';

export const fetchCampaigns = async () => {
    try {
        const response = await axios.get(CAMPAIGNS.LIST, {
            params: {
                populate: '*',
            },
        });
        return response.data.data;
    } catch (error) {
        console.error('Error fetching campaigns:', error);
        return [];
    }
};
