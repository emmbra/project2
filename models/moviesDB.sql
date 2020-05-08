DROP DATABASE IF EXISTS moviesDB;
CREATE DATABASE moviesDB;
USE moviesDB;
CREATE TABLE movies (
	id INT AUTO_INCREMENT NOT NULL,
    movieTitle VARCHAR(50) NOT NULL,
    movieYear INTEGER,
    movieRating DECIMAL(3, 2),
    movieGenre VARCHAR(50),
    movieCommenter VARCHAR(50),
    movieComments VARCHAR(50),
    moviePoster VARCHAR(255),
    movieSad BOOLEAN,
    movieFunny BOOLEAN,
    movieAction BOOLEAN,
    movieRomance BOOLEAN,
    PRIMARY KEY(id)
);

-- join a movie with its ratings table
-- to get an average of movie rating (average function in SQL)