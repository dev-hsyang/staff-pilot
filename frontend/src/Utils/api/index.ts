import axios from 'axios';

const instance = axios.create({
  baseURL: `${import.meta.env.VITE_APP_API}`,
  // headers: { Authorization: `` },
  timeout: 2000,
});

instance.interceptors.response.use(
  (response) => response,
  (error) => error,
);

export default instance;
