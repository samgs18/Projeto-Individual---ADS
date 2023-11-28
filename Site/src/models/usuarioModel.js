var database = require("../database/config")

function autenticar(email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", email, senha)
    var instrucao = `
        SELECT idUsuario, Nome, Email, Senha FROM Usuario WHERE Email = '${email}' AND Senha = '${senha}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function cadastrarEndereco(cep, rua, bairro, cidade) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", cep, rua, bairro, cidade);
    
    // Inserção na tabela Endereco
    var instrucaoEndereco = `
    INSERT INTO Endereco (Cep, Rua, Bairro, Cidade) VALUES ('${cep}', '${rua}', '${bairro}', '${cidade}');
    `;
    
    console.log("Executando a instrução SQL: \n" + instrucaoEndereco);
    return database.executar(instrucaoEndereco);
}

function cadastrar(nome, email, senha, cnh, dirige, moto) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nome, email, senha, cnh, dirige, moto);

    var instrucao = `
        INSERT INTO Usuario (Nome, Email, Senha, CNH, Dirige, possuiMoto) VALUES ('${nome}', '${email}', '${senha}', '${cnh}', '${dirige}', '${moto}');
    `;
    
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

    module.exports = {
    autenticar,
    cadastrar,
    cadastrarEndereco
};