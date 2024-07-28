import axios from '@/configs/axios';
import { COMMENTS, FORUM } from '@/constants/api';
import { FieldValues } from 'react-hook-form';

export const getForum = async (uuid: string) => {
  const res = await axios.get(`${FORUM.find}/${uuid}`);

  return res.data;
};

export const getComments = async (id: number) => {
  const res = await axios.get(`${COMMENTS.find}`, {
    params: {
      'filters[forum][id][$eq]': id,
      populate: 'forum'
    }
  });

  return res.data;
};

export const createComment = async (data: FieldValues) => {
  const res = await axios.post(COMMENTS.create, {
    data: {
      comment: data.comment,
      forum: data.forum
    }
  });
  return res;
};
