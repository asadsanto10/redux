import axiosInstance from '../../utils/axios';

export const getVideo = async (videoId) => {
  const responce = await axiosInstance.get(`/videos/${videoId}`);
  return responce.data;
};

export const updateLikeUnlike = async (id, exitsCount, type) => {
  let responce = '';

  responce =
    type === 'like' &&
    (await axiosInstance.patch(`/videos/${id}`, {
      likes: exitsCount + 1,
    }));

  responce =
    type === 'dislike' &&
    (await axiosInstance.patch(`/videos/${id}`, {
      unlikes: exitsCount + 1,
    }));

  // console.log(id);
  // console.log(likesCount);
  // console.log(responce.data);
  return responce.data;
};
