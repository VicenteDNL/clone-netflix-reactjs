import axios from 'axios';

const API_KEY = '8c2615fde837edfe3621e4c31532dac1';
const BASE_URL = 'https://api.themoviedb.org';
const VERSION_API = '3';
const LANGUAGE = 'pt-BR';

const paramsBaseUrl = (img = false) => {
  let url = `?api_key=${API_KEY}&language=${LANGUAGE}`;
  if (img) {
    url = `${url}&include_image_language=${LANGUAGE}`;
  }
  return url;
};

const API = axios.create({
  baseURL: `${BASE_URL}/${VERSION_API}`,
});

export { API, paramsBaseUrl };
