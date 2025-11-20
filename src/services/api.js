import axios from 'axios';

// Base URL del backend: configurable por env y con fallback
const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL ||
  (import.meta.env.PROD
    ? 'https://backend-parcial3-web2.vercel.app'
    : 'http://localhost:5000');

const WIKIPEDIA_URL = `${API_BASE_URL}/api/wikipedia`;
const RESOURCES_URL = `${API_BASE_URL}/api/resources`;

// Eliminados los endpoints de Items en frontend

// Obtener datos de Wikipedia en español vía backend
export const getWikipediaArticles = async (count = 10) => {
    const response = await axios.get(WIKIPEDIA_URL, { params: { count } });
    return response.data;
};

export const getPhotos = async () => {
    const response = await axios.get(`${RESOURCES_URL}/photos`);
    return response.data;
};

export const getCountries = async () => {
    const response = await axios.get(`${RESOURCES_URL}/countries`);
    return response.data;
};

// Usuarios removidos del proyecto
