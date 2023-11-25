drop database if exists projetoIndividual;

create database if not exists projetoIndividual; 

use projetoIndividual;

create table Relatorio (
idRelatorio int primary key auto_increment,
CNH char(3),
dirige char(3),
possuiMoto char(3)
);

create table Endereco (
idEndereco int primary key auto_increment,
Cep char(8),
Rua varchar(45),
Bairro varchar (45),
Cidade varchar(45)
);

create table Quiz (
idQuiz int primary key auto_increment,
Resposta1 varchar(45),
Resposta2 varchar(45),
Resposta3 varchar(45),
Resposta4 varchar(45),
Resposta5 varchar(45)
);

create table Usuario (
idUsuario int auto_increment,
fkEndereco int,
fkRelatorio int,
fkQuiz int,
Nome varchar(45),
Email varchar(45),
Senha varchar(45),
primary key (idUsuario),
foreign key (fkEndereco) references Endereco(idEndereco),
foreign key (fkRelatorio) references Relatorio(idRelatorio),
foreign key (fkQuiz) references Quiz(idQuiz) 
);

select * from Usuario;

select * from Endereco;

select * from Relatorio;