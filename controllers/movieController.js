const axios = require('axios');
const connection = require('../config/connection');
const movieQueries = require('../models/movies/movieQueries');


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
    } catch (error) {
      res.status(403).json({ error });
    }
  },

  addRating: async (req, res) => {
    const { rate } = req.body;
    if (!rate) {
      return res.json({ error: 'You must provide rate for movies '});
    }
    try {
      const [response] = await connection.query(movieQueries.addMovieRating, { rate });
      console.log(response);
      const [rate] = await connection.query(movieQueries.getMoviesByTitle, response.insertRate);
      return res.json(rate[0]);
    } catch (e) {
      return res.status(403).json({ e });
    }
  },
  

  // addMovieRating: async (req, res) => {
  //   const { movieRating } = req.body;
  //   if (!movieRating) {
  //     return res.json({ error: 'You must provide a rating for the movie '});
  //   }
  //   try {
  // movieRating, movieComments, movieSad, movieFunny, movieAction, movieRomance
  //     const [response] = await connection.query(movieQueries.addMovieRating, { text });
  //     const [movies] = await connection.query(todoQueries.findTodoById, response.insertId);
  //     return res.json(movies[0]);
  //   } catch (e) {
  //     return res.status(403).json({ e });
  //   }
  // },

  // updateMovieRating: async (req, res) => {
  // },

};
