import apiKey from "./apiKey";

const getMovies = async (query, signal) => {
  const response = await fetch(
    `https://omdbapi.com/?apikey=${apiKey}&s=${query}`,
    { signal }
  );
  const movies = await response.json();
  return movies;
};

export default getMovies;
