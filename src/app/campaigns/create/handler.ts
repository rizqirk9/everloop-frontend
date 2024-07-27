import { FieldValues } from 'react-hook-form';

import axios from '@/configs/axios';
import { CAMPAIGNS } from '@/constants/api';
import { uploadFile } from '@/utils/uploadFile';

export const createEvent = async (data: FieldValues) => {
  const bannerFileId = await uploadFile(data.banner);

  const res = await axios.post(CAMPAIGNS.create, {
    data: {
      name: data.name,
      description: data.description,
      budget: data.budget,
      date: data.date,
      banner: bannerFileId,
      type: data.type
    }
  });
  return res;
};
