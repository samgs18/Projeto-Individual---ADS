create database projetoIndividual;

use projetoIndividual;

create table Relatorio (
idRelatorio int primary key auto_increment,
CNH char(3),
dirige char(3),
possuiMoto char(3)
);

create table Cliente (
idCliente int primary key auto_increment,
fkEndereço int,
fkRelatorio int,
Nome varchar(45),
Email varchar(45),
Senha varchar(45),
foreign key (fkEndereço) references Endereço(idEndereco),
foreign key (fkRelatorio) references Relatorio(idRelatorio)  
);

create table Endereço (
idEndereco int primary key auto_increment,
CEP varchar(10),
Rua varchar(45),
Bairro varchar (45),
Cidade varchar(45)
);

select * from Cliente;