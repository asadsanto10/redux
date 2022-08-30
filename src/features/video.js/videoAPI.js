import axiosInstance from '../../utils/axios';

export const getVideo = async (videoId) => {
  const responce = await axiosInstance.get(`/videos/${videoId}`);
  return responce.data;
};
