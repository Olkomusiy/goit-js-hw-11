import axios from "axios";

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '54665175-71b46f9aabf89f8cddeeb37be';

export function getImagesByQuery(query) {
    return axios.get(BASE_URL, {
        params: {
            key: API_KEY,
            q: query,
            image_type: 'photo',
            orientation: 'horizontal',
            safesearch: true,
        },
    
    })
    .then(response => response.data);
};