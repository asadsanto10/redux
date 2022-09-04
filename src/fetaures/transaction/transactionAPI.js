import axiosInstance from '../../utils/axios';

export const getTransaction = async () => {
  const response = await axiosInstance.get('/Transactions');
  return response.data;
};

export const addTransaction = async (data) => {
  const response = await axiosInstance.post('/Transactions', data);
  return response.data;
};

export const editTransaction = async (id, data) => {
  const response = await axiosInstance.put(`/Transactions/${id}`, data);
  return response.data;
};

export const deleteTransaction = async (id) => {
  const response = await axiosInstance.delete(`/Transactions/${id}`);
  return response.data;
};
