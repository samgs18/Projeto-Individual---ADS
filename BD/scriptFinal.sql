drop database if exists projetoIndividual;

create database if not exists projetoIndividual; 

use projetoIndividual;

create table Quiz (
idQuiz int primary key auto_increment,
Acertos int,
Erros int
);

create table Usuario (
idUsuario int primary key auto_increment,
Nome varchar(45),
Email varchar(45),
Senha varchar(45),
CNH char(3),
Dirige char(3),
possuiMoto char(3),
fkQuiz int,
foreign key (fkQuiz) references Quiz(idQuiz) 
);

create table Endereco (
idEndereco int primary key auto_increment,
Cep char(8),
Rua varchar(45),
Bairro varchar (45),
Cidade varchar(45),
fkUsuario int,
foreign key (fkUsuario) references Usuario(idUsuario)
);

select * from usuario;

select * from endereco;

select * from quiz;