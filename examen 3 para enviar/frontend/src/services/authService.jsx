import api from '../api/api';

export const login = async (email, password) => {
  const response = await api.post('/users/login', { email, password });
  localStorage.setItem('token', response.data.token);
  return response.data;
};

export const register = async (name, email, password) => {
  const response = await api.post('/users/register', { name, email, password });
  localStorage.setItem('token', response.data.token);
  return response.data;
};

export const logout = () => {
  localStorage.removeItem('token');
};
