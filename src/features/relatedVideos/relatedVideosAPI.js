import axiosInstance from '../../utils/axios';

export const getRelatedVides = async ({ tags, id }) => {
  // ?tags_like=javascript&...&id_ne=4&_limit=5

  const limit = 5;
  const queryString =
    tags?.length > 0
      ? `${tags.map((tag) => `tags_like=${tag}`).join('&')}&id_ne=${id}&_limit=${limit}`
      : `id_ne=${id}&_limit=${limit}`;

  const responce = await axiosInstance.get(`/videos?${queryString}`);
  return responce.data;
};
