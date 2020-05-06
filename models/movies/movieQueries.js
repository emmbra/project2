// Get movies
const getAllMovies = 'SELECT * FROM movies;';
const getMovieById = 'SELECT * FROM movies WHERE id = ?;';
const getMoviesByTitle = 'SELECT * FROM movies WHERE movieTitle = ?;';
const getMoviesByYear = 'SELECT * FROM movies WHERE movieYear = ?;';
const getMoviesByRating = 'SELECT * FROM movies WHERE movieRating = ?;';
const getMoviesByGenre = 'SELECT * FROM movies WHERE movieGenre = ?;';
const getMoviesBySad = 'SELECT * FROM movies WHERE movieSad = true;';
const getMoviesByFunny = 'SELECT * FROM movies WHERE movieFunny = true;';
const getMoviesByAction = 'SELECT * FROM movies WHERE movieAction = true;';
const getMoviesByRomance = 'SELECT * FROM movies WHERE movieRomance = true;';

// Adding movie ratings
const addMovie = 'INSERT INTO movies (movieTitle, movieYear, movieRating, movieSad, movieFunny, movieAction, movieRomance) VALUES (?, ?, ?, ?, ?, ?, ?);';

// Updating movie ratings
const updateMovieRating = 'UPDATE movies SET movieRating = ? WHERE id = ?;';

// Deleting todos
const deleteMovieById = 'DELETE FROM movies WHERE id = ?;';

module.exports = {
  getAllMovies,
  getMovieById,
  getMoviesByTitle,
  getMoviesByYear,
  getMoviesByRating,
  getMoviesByGenre,
  getMoviesBySad,
  getMoviesByFunny,
  getMoviesByAction,
  getMoviesByRomance,
  addMovie,
  updateMovieRating,
  deleteMovieById,
};
