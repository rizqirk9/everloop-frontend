import axios from '@/configs/axios';
import { FILE } from '@/constants/api';

export const uploadFile = async (file: File) => {
  const formData = new FormData();
  formData.append('files', file);

  const uploadResponse = await axios.post(FILE.upload, formData, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  });

  return uploadResponse.data[0].id;
};
