create database dropnike;

use dropnike;


create table usuario (
idusuario int primary key auto_increment,
nome varchar (100),
email varchar (100),
size char (2),
senha varchar (45)
)auto_increment = 1001;

select * from usuario;

insert into usuario values (null, 'matheus', 'matheus.vieck@hotmail.com', '41', '1234');