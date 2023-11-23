drop database if exists projetoIndividual;

create database if not exists projetoIndividual; 

use projetoIndividual;

create table Relatorio (
idRelatorio int primary key auto_increment,
CNH char(1),
dirige char(1),
possuiMoto char(1),
constraint chkCnh check (CNH IN ('s', 'n')),
constraint chkDIReck check(dirige IN ('s', 'n')),
constraint chkPM check (possuiMoto IN ('s', 'n'))
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
Pergunta1 varchar(45),
Pergunta2 varchar(45),
Pergunta3 varchar(45),
Pergunta4 varchar(45),
Pergunta5 varchar(45)
);

create table Cliente (
idCliente int primary key auto_increment,
fkEndereco int,
fkRelatorio int,
fkQuiz int,
Nome varchar(45),
Email varchar(45),
Senha varchar(45),
foreign key (fkEndereco) references Endereco(idEndereco),
foreign key (fkRelatorio) references Relatorio(idRelatorio),
foreign key (fkQuiz) references Quiz(idQuiz) 
);


select * from Cliente;