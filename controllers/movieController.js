const axios = require('axios');
const connection = require('../config/connection');
const movieQueries = require('../models/movies/movieQueries');

// deleting/updating a specific movie - use reqparams
// everything else use reqbody

module.exports = {
  getAllMovies: async (req, res) => {
    try {
      const [movies] = await connection.query(movieQueries.getAllMovies);
      return res.status(200).json(movies);
    } catch (e) {
      return res.status(403).json({ e });
    }
  },

  getMoviesByTitle: async (req, res) => {
    console.log(req.params);
    const { movieTitle } = req.params;
    try {
      const [movies] = await connection.query(movieQueries.getMoviesByTitle, movieTitle);
      res.status(200).json(movies);
    } catch (e) {
      res.status(403).json({ e });
    }
  },

  getMoviesByYear: async (req, res) => {
    const { movieYear } = req.params;
    try {
      const [movies] = await connection.query(movieQueries.getMoviesByYear, movieYear);
      res.status(200).json(movies);
    } catch (e) {
      res.status(403).json({ e });
    }
  },

  getMoviesByRating: async (req, res) => {
    const { movieRating } = req.params;
    try {
      const [movies] = await connection.query(movieQueries.getMoviesByRating, movieRating);
      res.status(200).json(movies);
    } catch (e) {
      res.status(403).json({ e });
    }
  },

  getMoviesByGenre: async (req, res) => {
    const { movieGenre } = req.params;
    try {
      const [movies] = await connection.query(movieQueries.getMoviesByGenre, movieGenre);
      res.status(200).json(movies);
    } catch (e) {
      res.status(403).json({ e });
    }
  },

  getMoviesBySad: async (req, res) => {
    const { movieSad } = req.params;
    try {
      const [movies] = await connection.query(movieQueries.getMoviesBySad, movieSad);
      res.status(200).json(movies);
    } catch (e) {
      res.status(403).json({ e });
    }
  },

  getMoviesByFunny: async (req, res) => {
    const { movieFunny } = req.params;
    try {
      const [movies] = await connection.query(movieQueries.getMoviesByFunny, movieFunny);
      res.status(200).json(movies);
    } catch (e) {
      res.status(403).json({ e });
    }
  },

  getMoviesByAction: async (req, res) => {
    const { movieAction } = req.params;
    try {
      const [movies] = await connection.query(movieQueries.getMoviesByAction, movieAction);
      res.status(200).json(movies);
    } catch (e) {
      res.status(403).json({ e });
    }
  },

  getMoviesByRomance: async (req, res) => {
    const { movieRomance } = req.params;
    try {
      const [movies] = await connection.query(movieQueries.getMoviesByAction, movieRomance);
      res.status(200).json(movies);
    } catch (e) {
      res.status(403).json({ e });
    }
  },

  OMDBMovieSearch: async (req, res) => {
    const { movieTitle } = req.params;
    try {
      const { data } = await axios.get(`https://www.omdbapi.com/?t=${movieTitle}&apikey=${process.env.OMDB_API}`);
      console.log(data);
      res.status(200).json(data);
    } catch (e) {
      res.status(403).json({ e });
    }
  },

  addMovie: async (req, res) => {
    const { movieTitle } = req.body;
    const { data } = await axios.get(`https://www.omdbapi.com/?t=${movieTitle}&apikey=${process.env.OMDB_API}`);
    console.log('console1:', data.Title);
    const { movieRating, movieSad, movieFunny, movieAction, movieRomance } = req.body;
    const movieData = { ...req.body };
    console.log('console2:', movieData);
    if (!movieRating) {
      return res.json({ error: 'You must provide a rating for the movie' });
    }
    try {
      const [response] = await connection.query(movieQueries.addMovie, [data.Title, parseInt(data.Year), parseInt(movieRating), parseInt(movieSad), parseInt(movieFunny), parseInt(movieAction), parseInt(movieRomance)]);
      const [movies] = await connection.query(movieQueries.getMovieById, response.insertId);
      return res.json(movies[0]);
    } catch (e) {
      return res.status(403).json({ e });
    }
  },

//   updateMovieRating: async (req, res) => {
//     const { movieRating } = req.body;
//     if (!movieRating) {
//       return res.json({ error: 'You must provide a rating for the movie ' });
//     }
//     try {
// // 'UPDATE movies SET movieRating = ? WHERE id = ?;';
//       const [response] = await connection.query(movieQueries.updateMovieRating, { movieRating });
//       const [movies] = await connection.query(movieQueries.getMovieById, response.insertId);
//       return res.json(movies[0]);
//     } catch (e) {
//       return res.status(403).json({ e });
//     }
//   },

  // updateMovieRating: async (req, res) => {
  // },

};
