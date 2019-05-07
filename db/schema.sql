DROP DATABASE IF EXISTS pets_db;
CREATE DATABASE pets_db;

USE pets_db;

CREATE TABLE cats (
  id INT(11) AUTO_INCREMENT NOT NULL,
  name VARCHAR(255) NOT NULL,
  sleepy BOOLEAN DEFAULT false,
  PRIMARY KEY (id)
);