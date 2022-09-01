import axiosInstance from '../../utils/axios';

export const getVideos = async (tags, search, author) => {
  let queryString = '';
  if (tags.length > 0) {
    queryString += tags.map((tag) => `tags_like=${tag}`).join('&');
  }

  if (search !== '') {
    queryString += `&q=${search}`;
  }
  if (author.length > 0) {
    queryString += author.map((selectAuthor) => `author=${selectAuthor}`).join('&');
  }

  const responce = await axiosInstance.get(`/videos/?${queryString}`);
  return responce.data;
};
// _limit=4&
