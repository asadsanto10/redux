import axiosInstance from '../../utils/axios';

export const getTags = async () => {
  const responce = await axiosInstance.get('/tags');
  return responce.data;
};
