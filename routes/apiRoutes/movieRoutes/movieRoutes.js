const router = require('express').Router();
// /api/movies prepended to every route inside of here
const movieController = require('../../../controllers/movieController');

// /api/movies
router.route('/')
  .get(movieController.getAllMovies);

// /api/movies/:title
router.route('/:title')
  .get(movieController.getMoviesByTitle);

// /api/movies/:year
router.route('/:year')
  .get(movieController.getMoviesByYear);

// // /api/movies/:genre
// router.route('/:genre')
//   .get(movieController.getMoviesByGenre);

// /api/movies/:rating
router.route('/:rating')
  .get(movieController.getMoviesByRating)
  .post(movieController.addMovieRating)
  .patch(movieController.updateMovieRating);

module.exports = router;
