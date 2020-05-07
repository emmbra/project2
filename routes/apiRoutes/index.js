const router = require('express').Router();
const movieRoutes = require('./movieRoutes');

// /api prepended to every route inside of here
router.use('/movies', movieRoutes);

module.exports = router;
