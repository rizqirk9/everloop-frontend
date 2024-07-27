import { FieldValues } from 'react-hook-form';

import axios from '@/configs/axios';
import { EVENT } from '@/constants/api';
import { uploadFile } from '@/utils/uploadFile';

export const createEvent = async (data: FieldValues) => {
  const bannerFileId = await uploadFile(data.banner);

  const res = await axios.post(EVENT.create, {
    data: {
      name: data.name,
      description: data.description,
      budget: data.budget,
      date: data.date,
      banner: bannerFileId
    }
  });
  return res;
};
