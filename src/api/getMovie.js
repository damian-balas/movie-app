import API_KEY from "./API_KEY";

export const PLOT_LENGTH = {
  SHORT: "short",
  FULL: "full"
};

const getMovie = ({ id, signal, plot = PLOT_LENGTH.SHORT }) => {
  return fetch(`https://omdbapi.com/?apikey=${API_KEY}&i=${id}&plot=${plot}`, { signal }).then(response => response.json());
};

export default getMovie;
