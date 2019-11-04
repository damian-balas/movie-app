import API_KEY from "./API_KEY";

const getMovies = (query, signal) => {
  return fetch(`https://omdbapi.com/?apikey=${API_KEY}&s=${query}`, { signal }).then(response => response.json());
};

export default getMovies;
