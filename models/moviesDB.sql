CREATE DATABASE moviesDB;
USE moviesDB;
CREATE TABLE movies(
	id INT AUTO_INCREMENT NOT NULL,
    movieTitle VARCHAR(50) NOT NULL,
    movieYear INTEGER,
    movieRating INTEGER,
    movieComments VARCHAR(50),
    movieSad BOOLEAN,
    movieFunny BOOLEAN,
    movieAction BOOLEAN,
    movieRomance BOOLEAN,
    PRIMARY KEY(id)
);
