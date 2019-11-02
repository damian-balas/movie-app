import apiKey from "./apiKey";

const getMovie = async (id, signal, plot = "short") => {
  const response = await fetch(
    `https://omdbapi.com/?apikey=${apiKey}&i=${id}&plot=${plot}`,
    { signal }
  );
  const movie = await response.json();
  return movie;
};

export default getMovie;
