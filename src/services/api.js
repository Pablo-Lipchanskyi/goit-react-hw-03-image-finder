import axios from 'axios';
import { toast } from 'react-toastify';
const API_KEY = '31487195-9d4b254f893254d6179d6b379';

axios.defaults.baseURL = 'https://pixabay.com';

async function fetchImagesWithQuery(searchQuery, page = 1) {
  const response = await axios.get(
    `/api/?q=${searchQuery}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
  );
  response.data.hits.length === 0 && toast.error('No matches :(');
  return response.data.hits;
}

export default fetchImagesWithQuery;