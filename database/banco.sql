create database apiTreinamento;

use apiTreinamento;

create table treinamento (
id_treinamento int primary key AUTO_INCREMENT,
nome varchar(100),
carga_horaria int NOT NULL,
modalidade varchar(50) NOT NULL
);

create table instrutor (
id_instrutor int primary key AUTO_INCREMENT,
nome varchar(100),
especialidade varchar(150),
email varchar(100)
);

create table sala (
id_sala int primary key AUTO_INCREMENT,
nome varchar(100),
capacidade varchar(3),
localizacao varchar(100)
);