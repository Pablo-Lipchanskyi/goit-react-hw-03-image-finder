import axios from 'axios';
import { toast } from 'react-toastify';
const API_KEY = '32461128-4a9834d8affa3b6b2034fc7e6';

axios.defaults.baseURL = 'https://pixabay.com';

async function fetchImagesWithQuery(searchQuery, page = 1) {
  const response = await axios.get(
    `/api/?q=${searchQuery}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=15`
  );
  response.data.hits.length === 0 && toast.error('No matches :(');
  return response.data.hits;
}

export default fetchImagesWithQuery;