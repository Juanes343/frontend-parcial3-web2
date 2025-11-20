import axios from 'axios';

const WIKIPEDIA_URL = 'http://localhost:5000/api/wikipedia';
const RESOURCES_URL = 'http://localhost:5000/api/resources';

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

export const getUsers = async () => {
    const response = await axios.get(`${RESOURCES_URL}/users`);
    return response.data;
};
