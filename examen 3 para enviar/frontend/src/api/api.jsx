import axios from 'axios';

const fetchTasks = async () => {
  try {
    const response = await api.get('/tasks');
    setTasks(response.data);
  } catch (error) {
    console.error("Error al obtener las tareas:", error);
  }
};

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000/api', // Cambiar process.env a import.meta.env
});

// Agregar el token JWT a las peticiones, si existe
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;