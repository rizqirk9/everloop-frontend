import { FieldValues } from 'react-hook-form';

import axios from '@/configs/axios';
import { FORUM } from '@/constants/api';

export const createForum = async (data: FieldValues) => {
    const res = await axios.post(FORUM.create, {
    data: {
      title: data.title,
      content: data.content,
    }
  });
  return res;
};
