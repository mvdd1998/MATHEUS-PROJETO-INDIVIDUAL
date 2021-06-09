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
    fkUsuario INT,
    fkLancamento int
);



select * from publicacao;

select * from usuario;

select  round(avg(size),0)as Media, max(size) as Maior, min(size) as Menor  from usuario;

select nome, size from usuario;

select * from usuario join publicacao on publicacao.fkusuario = usuario.id;

-- AIR FORCE 1 OFF WHITE
select usuario.id, usuario.nome, usuario.size, publicacao.descricao, publicacao.fklancamento from usuario 
join publicacao on publicacao.fkusuario = usuario.id where fklancamento = 1;

-- DUNK SB WHAT THE PAUL
select usuario.id, usuario.nome, usuario.size, publicacao.descricao, publicacao.fklancamento from usuario 
join publicacao on publicacao.fkusuario = usuario.id where fklancamento = 2;

-- AIR JORDAN 1 MID COLORS
select usuario.id, usuario.nome, usuario.size, publicacao.descricao, publicacao.fklancamento from usuario 
join publicacao on publicacao.fkusuario = usuario.id where fklancamento = 3;

-- DUNK SCRAP
select usuario.id, usuario.nome, usuario.size, publicacao.descricao, publicacao.fklancamento from usuario 
join publicacao on publicacao.fkusuario = usuario.id where fklancamento = 4;



