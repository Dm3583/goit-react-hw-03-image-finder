import axios from 'axios';

const API_KEY = '19762883-8865d0dea9f1f7e21a434f769';
const BASE_URL = 'https://pixabay.com/api/';

const getImages = ({ query, page, per_page }) => {
  return axios
    .get(
      `${BASE_URL}?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=${per_page}`,
    )
    .then(response => response.data);
};

export default { getImages };
