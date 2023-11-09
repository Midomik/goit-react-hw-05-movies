import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const API_KEY = '57aaf5a2d832988df2f4aaf96918b565';

export const getTrending = async () => {
  const { data } = await axios.get(`trending/movie/day?api_key=${API_KEY}`);

  return data.results;
};

export const getMovieQuery = async query => {
  const { data } = await axios.get(
    `search/movie?query=${query}&api_key=${API_KEY}`
  );

  return data.results;
};

export const getFilm = async filmId => {
  const { data } = await axios.get(`movie/${filmId}?api_key=${API_KEY}`);

  return data;
};

export const getMovieCast = async filmId => {
  const { data } = await axios.get(
    `movie/${filmId}/credits?api_key=${API_KEY}`
  );

  return data.cast;
};

export const getMovieReviews = async filmId => {
  const { data } = await axios.get(
    `movie/${filmId}/reviews?api_key=${API_KEY}&language=en-US`
  );

  return data.results;
};
