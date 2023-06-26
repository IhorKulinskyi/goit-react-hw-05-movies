import axios from 'axios';

const API_KEY = '5e238007a1f6fff0496d2b1889fa1199';
const BASE_URL = 'https://api.themoviedb.org/3/';

export const getTrends = async () => {
  try {
    const res = await axios.get(
      `${BASE_URL}/trending/movie/day?api_key=${API_KEY}`
    );
    return res.data.results;
  } catch (error) {
    console.log(error);
  }
};

export const getMovieById = async id => {
  try {
    const res = await axios.get(`${BASE_URL}movie/${id}?api_key=${API_KEY}`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const getCredits = async id => {
  try {
    const res = await axios.get(
      `${BASE_URL}movie/${id}/credits?api_key=${API_KEY}`
    );
    return res.data.cast;
  } catch (error) {
    console.log(error);
  }
};

export const getReviews = async id => {
  try {
    const res = await axios.get(
      `${BASE_URL}movie/${id}/reviews?api_key=${API_KEY}`
    );
    return res.data.results;
  } catch (error) {
    console.log(error);
  }
};

export const getMovieByQuery = async query => {
  try {
    const res = await axios.get(
      `${BASE_URL}search/movie?api_key=${API_KEY}&query=${query}`
    );
    return res.data.results;
  } catch (error) {
    console.log(error);
  }
};
