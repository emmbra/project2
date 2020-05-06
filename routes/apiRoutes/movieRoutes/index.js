const router = require('express').Router();
// /api/movies prepended to every route inside of here
const movieController = require('../../../controllers/movieController');

// /api/movies
router.route('/')
  .get(movieController.getAllMovies);

// /api/movies/:title
router.route('/title/:movieTitle')
  .get(movieController.getMoviesByTitle);

// /api/movies/:year
router.route('/year/:movieYear')
  .get(movieController.getMoviesByYear);

// /api/movies/:rating
router.route('/rating/:movieRating')
  .get(movieController.getMoviesByRating);

// /api/movies/addmovie
router.route('/addmovie/')
  .get(movieController.getMoviesByTitle)
  .post(movieController.addMovie);
// .patch(movieController.updateMovieRating);

// // /api/movies/:genre
router.route('/genre/movieSad')
  .get(movieController.getMoviesBySad);

router.route('/genre/movieFunny')
  .get(movieController.getMoviesByFunny);

router.route('/genre/movieRomance')
  .get(movieController.getMoviesByRomance);

router.route('/genre/movieAction')
  .get(movieController.getMoviesByAction);

router.route('/omdb/:movieTitle')
  .get(movieController.OMDBMovieSearch);

// /api/movies/:id
router.route('/:id')
  .delete(movieController.deleteMovieById);

// // /api/movies/:genre
// router.route('/:genre')
//   .get(movieController.getMoviesByGenre);

// router.route('/:movieTitle/:movieYear/:movieGenre')
//   .get(movieController.)

//   google ? variables for making our own api

module.exports = router;
