-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!

/*
comandos para mysql - banco local - ambiente de desenvolvimento
*/
drop database if exists projetoIndividual;

create database if not exists projetoIndividual; 

use projetoIndividual;

create table Relatorio (
idRelatorio int primary key auto_increment,
CNH char(3),
dirige char(3),
possuiMoto char(3)
-- constraint chkCnh check (CNH IN ('s', 'n')),
-- constraint chkDIReck check(dirige IN ('s', 'n')),
-- constraint chkPM check (possuiMoto IN ('s', 'n'))
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

-- select * from Usuario;

-- select * from Endereco;

-- select * from Relatorio;
-- insert into empresa (razao_social, cnpj) values ('Empresa 1', '00000000000000');
-- insert into aquario (descricao, fk_empresa) values ('Aquário de Estrela-do-mar', 1);

-- /*
-- comando para sql server - banco remoto - ambiente de produção
-- */

-- CREATE TABLE empresa (
-- 	id INT PRIMARY KEY IDENTITY(1,1),
-- 	razao_social VARCHAR(50),
-- 	cnpj CHAR(14)
-- );

-- CREATE TABLE usuario (
-- 	id INT PRIMARY KEY IDENTITY(1,1),
-- 	nome VARCHAR(50),
-- 	email VARCHAR(50),
-- 	senha VARCHAR(50),
-- 	fk_empresa INT FOREIGN KEY REFERENCES empresa(id)
-- );

-- CREATE TABLE aviso (
-- 	id INT PRIMARY KEY IDENTITY(1,1),
-- 	titulo VARCHAR(100),
-- 	descricao VARCHAR(150),
-- 	fk_usuario INT FOREIGN KEY REFERENCES usuario(id)
-- );

-- create table aquario (
-- /* em nossa regra de negócio, um aquario tem apenas um sensor */
-- 	id INT PRIMARY KEY IDENTITY(1,1),
-- 	descricao VARCHAR(300),
-- 	fk_empresa INT FOREIGN KEY REFERENCES empresa(id)
-- );

-- /* esta tabela deve estar de acordo com o que está em INSERT de sua API do arduino - dat-acqu-ino */

-- CREATE TABLE medida (
-- 	id INT PRIMARY KEY IDENTITY(1,1),
-- 	dht11_umidade DECIMAL,
-- 	dht11_temperatura DECIMAL,
-- 	luminosidade DECIMAL,
-- 	lm35_temperatura DECIMAL,
-- 	chave TINYINT,
-- 	momento DATETIME,
-- 	fk_aquario INT FOREIGN KEY REFERENCES aquario(id)
-- );

-- insert into empresa (razao_social, cnpj) values ('Empresa 1', '00000000000000');

-- /*
-- comandos para criar usuário em banco de dados azure, sqlserver,
-- com permissão de insert + update + delete + select
-- */

CREATE USER [usuarioParaAPIWebDataViz_datawriter_datareader]
WITH PASSWORD = '#Gf_senhaParaAPIWebDataViz',
DEFAULT_SCHEMA = dbo;

EXEC sys.sp_addrolemember @rolename = N'db_datawriter',
@membername = N'usuarioParaAPIWebDataViz_datawriter_datareader';

EXEC sys.sp_addrolemember @rolename = N'db_datareader',
@membername = N'usuarioParaAPIWebDataViz_datawriter_datareader';
