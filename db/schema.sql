CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers(
  id INT AUTO_INCREMENT NOT NULL,
  burger_name VARCHAR(100) NULL,
  devoured TINYINT(0) NULL,
  date TIMESTAMP NOT NULL,
  PRIMARY KEY(id)
);