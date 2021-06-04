create database dropnike;

use dropnike;

create table usuario(
idusuario int primary key auto_increment,
nome varchar (100),
login varchar (100),
size int,
senha varchar (45)
)auto_increment = 100;

select * from usuario;

select avg(size) from usuario;

create table comentar(
idcomentar int primary key auto_increment,
comentario varchar (150),
fk_usuario int,
foreign key (fk_usuario) references usuario(idusuario)
) auto_increment = 1;

select * from comentar;