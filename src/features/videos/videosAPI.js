import axiosInstance from '../../utils/axios';

export const getVideos = async () => {
  const responce = await axiosInstance.get('/videos');
  return responce.data;
};
