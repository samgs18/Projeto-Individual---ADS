drop database if exists projetoIndividual;

create database if not exists projetoIndividual; 

use projetoIndividual;

create table Quiz (
idQuiz int primary key auto_increment,
Acertos int,
Erros int
);

create table Usuario (
idUsuario int auto_increment,
fkQuiz int,
Nome varchar(45),
Email varchar(45),
Senha varchar(45),
CNH char(3),
Dirige char(3),
possuiMoto char(3),
primary key (idUsuario),
foreign key (fkQuiz) references Quiz(idQuiz) 
);

create table Endereco (
idEndereco int primary key auto_increment,
fkUsuario int,
Cep char(8),
Rua varchar(45),
Bairro varchar (45),
Cidade varchar(45),
primary key (idEndereco),
foreign key (fkUsuario) references Usuario(idUsuario)
);

CREATE USER [usuarioParaAPIWebDataViz_datawriter_datareader]
WITH PASSWORD = '#Gf_senhaParaAPIWebDataViz',
DEFAULT_SCHEMA = dbo;

EXEC sys.sp_addrolemember @rolename = N'db_datawriter',
@membername = N'usuarioParaAPIWebDataViz_datawriter_datareader';

EXEC sys.sp_addrolemember @rolename = N'db_datareader',
@membername = N'usuarioParaAPIWebDataViz_datawriter_datareader';
