import axios from 'axios';

const API_KEY = '5e238007a1f6fff0496d2b1889fa1199';
const BASE_URL = 'https://api.themoviedb.org/3/';

export const getTrends = async () => {
  const res = await axios.get(
    `${BASE_URL}/trending/movie/day?api_key=${API_KEY}`
  );
  return res.data.results;
};

export const getMovieById = async id => {
  const res = await axios.get(`${BASE_URL}movie/${id}?api_key=${API_KEY}`);
  return res.data;
};
