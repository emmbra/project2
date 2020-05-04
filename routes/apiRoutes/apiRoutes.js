const router = require('express').Router();
const movieRoutes = require('./movieRoutes/movieRoutes');

// /api prepended to everyRoute inside of here
router.use('/movies', movieRoutes);

module.exports = router;
