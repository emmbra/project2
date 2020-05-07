CREATE DATABASE moviesDB;
USE moviesDB;
CREATE TABLE movies (
	id INT AUTO_INCREMENT NOT NULL,
    movieTitle VARCHAR(50) NOT NULL,
    movieYear INTEGER,
    movieRating DECIMAL(1, 2),
    movieGenre VARCHAR(50),
    -- movieComments VARCHAR(50),
    movieSad BOOLEAN,
    movieFunny BOOLEAN,
    movieAction BOOLEAN,
    movieRomance BOOLEAN,
    PRIMARY KEY(id)
);

-- join a movie with its ratings table
-- to get an average of movie rating (average function in SQL)