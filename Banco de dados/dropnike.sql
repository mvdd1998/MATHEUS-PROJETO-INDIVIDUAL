create database dropnike;

use dropnike;

create table usuario(
id int primary key auto_increment,
nome varchar (100),
login varchar (100),
size int,
senha varchar (45)
)auto_increment = 100;

CREATE TABLE publicacao (
    id INT PRIMARY KEY AUTO_INCREMENT,
    descricao VARCHAR(100),
    fkUsuario INT
);

CREATE TABLE publicacao2 (
    id INT PRIMARY KEY AUTO_INCREMENT,
    descricao VARCHAR(100),
    fkUsuario INT
);

CREATE TABLE publicacao3 (
    id INT PRIMARY KEY AUTO_INCREMENT,
    descricao VARCHAR(100),
    fkUsuario INT
);

CREATE TABLE publicacao4 (
    id INT PRIMARY KEY AUTO_INCREMENT,
    descricao VARCHAR(100),
    fkUsuario INT
);

select * from publicacao4;

select * from usuario;

select avg(size) from usuario;





