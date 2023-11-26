var database = require("../database/config")

function autenticar(email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", email, senha)
    var instrucao = `
        SELECT Nome, Email, Senha FROM Usuario WHERE Email = '${email}' AND Senha = '${senha}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

// function buscaridEndereco(cep) {
//     console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", cep)
//     var instrucao = `
//         SELECT idEndereco FROM Endereco WHERE CEP = '${cep}';
//     `;
//     console.log("Executando a instrução SQL: \n" + instrucao);
//     return database.executar(instrucao);
// }

// function buscaridRelatorio(cnh) {
//     console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", cnh)
//     var instrucao = `
//         SELECT idRelatorio FROM Relatorio WHERE CNH = '${cnh}';
//     `;
//     console.log("Executando a instrução SQL: \n" + instrucao);
//     return database.executar(instrucao);
// }


function cadastrarEndereco(cep, rua, bairro, cidade) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", cep, rua, bairro, cidade);
    
    // Inserção na tabela Endereco
    var instrucaoEndereco = `
    INSERT INTO Endereco (Cep, Rua, Bairro, Cidade) VALUES ('${cep}', '${rua}', '${bairro}', '${cidade}');
    `;
    
    console.log("Executando a instrução SQL: \n" + instrucaoEndereco);
    return database.executar(instrucaoEndereco);
}

function cadastrarRelatorio(cnh, dirige, moto) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", cnh, dirige, moto);
    
    // Inserção na tabela Relatorio
    var instrucaoRelatorio = `
    INSERT INTO Relatorio (CNH, dirige, possuiMoto) VALUES ('${cnh}', '${dirige}', '${moto}');
    `;
    //select para pegar idRelatorio, vc vai retornar esse select para o usuariocontroller
    console.log("Executando a instrução SQL: \n" + instrucaoRelatorio);
    return database.executar(instrucaoRelatorio);
}

function cadastrar(nome, email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nome, email, senha);

    var instrucao = `
        INSERT INTO Usuario (Nome, Email, Senha) VALUES ('${nome}', '${email}', '${senha}');
    `;
    
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

    module.exports = {
    autenticar,
    cadastrar,
    cadastrarEndereco,
    cadastrarRelatorio
    // buscaridEndereco,
    // buscaridRelatorio
};