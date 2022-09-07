import axiosInstance from '../../utils/axios';

export const getTransaction = async (search, type) => {
  let queryString = '';

  if (search !== '') {
    queryString += `&q=${search}`;
  }
  if (type !== '') {
    queryString += `&type=${type}`;
  }

  const response = await axiosInstance.get(`/transactions/?${queryString}`);
  return response.data;
};

export const addTransaction = async (data) => {
  const response = await axiosInstance.post('/transactions', data);
  return response.data;
};

export const editTransaction = async (id, data) => {
  const response = await axiosInstance.put(`/transactions/${id}`, data);
  return response.data;
};

export const deleteTransaction = async (id) => {
  const response = await axiosInstance.delete(`/transactions/${id}`);
  return response.data;
};
