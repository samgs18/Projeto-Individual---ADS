var database = require("../database/config")

function autenticar(email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", email, senha)
    var instrucao = `
        SELECT id, nome, email, fk_empresa as empresaId FROM Cliente WHERE email = '${email}' AND senha = '${senha}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

// Coloque os mesmos parâmetros aqui. Vá para a var instrucao
// var idRelatorio = 0;
// var idEndereco = 0;
// // ...

function cadastrar(nome, email, senha, cep, rua, bairro, cidade, cnh, moto, dirige) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nome, email, senha);
    // , cep, rua, bairro, cidade, cnh, moto, dirige
    // Inserção na tabela Relatorio
    var instrucaoRelatorio = `
        INSERT INTO Relatorio (CNH, dirige, possuiMoto) VALUES ('${cnh}', '${dirige}', '${moto}');
    `;
    
    // Inserção na tabela Endereco
    var instrucaoEndereco = `
    INSERT INTO Endereco (Cep, Rua, Bairro, Cidade) VALUES ('${cep}', '${rua}', '${bairro}', '${cidade}');
    `;
    
    // Inserção na tabela Cliente
    var instrucaoUsuario = `
        INSERT INTO Usuario (Nome, Email, Senha) VALUES ('${nome}', '${email}', '${senha}');
    `;

    
    // console.log("Executando a instrução SQL: \n" + instrucaoRelatorio);
    // var resultadoRelatorio = database.executar(instrucaoRelatorio);
    
    // console.log("Executando a instrução SQL: \n" + instrucaocep);
    // var resultadoEndereco = database.executar(instrucaocep);
    
    // // Verificar se as operações foram bem-sucedidas
    // if (resultadoRelatorio && resultadoEndereco) {
        //     // Obter os IDs gerados automaticamente pelo banco de dados para Relatorio e Endereco
    //     var idRelatorio = resultadoRelatorio.insertId;
    //     var idEndereco = resultadoEndereco.insertId;

    //     // Inserção na tabela Cliente
    //     var instrucao = `
    //         INSERT INTO Cliente (Nome, Email, Senha, fkEndereco, fkRelatorio) 
    //         VALUES ('${nome}', '${email}', '${senha}', ${idEndereco}, ${idRelatorio});
    //     `;
    
    // console.log("Executando a instrução SQL: \n" + instrucaoRelatorio);
    // return database.executar(instrucaoRelatorio);
    
    // console.log("Executando a instrução SQL: \n" + instrucaoEndereco);
    // return database.executar(instrucaoEndereco);
    
    var instrucoesSQL = instrucaoRelatorio + instrucaoEndereco + instrucaoUsuario;
    
    console.log("Executando a instrução SQL: \n" + instrucoesSQL);
    return database.executar(instrucoesSQL);
    // console.log("Executando a instrução SQL: \n" + instrucaoRelatorio);
    // console.log("Executando a instrução SQL: \n" + instrucaoEndereco);
    // console.log("Executando a instrução SQL: \n" + instrucaoUsuario);

    // Combinação das instruções SQL e execução em uma única chamada
    // return database.executar(instrucaoRelatorio + instrucaoEndereco + instrucaoUsuario);
}
    module.exports = {
    autenticar,
    cadastrar
};
    // } else {
        //     console.log("Houve um erro ao realizar o cadastro!");
        //     return Promise.reject("Erro ao cadastrar: Falha na inserção de Relatorio ou Endereco.");
        // }

// ...

// function cadastrar(nome, email, senha, cep, rua, bairro, cidade, possuiCNH, possuiMoto, dirige) {
    
//     console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nome, email, senha, cep);
    
//     // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
//     //  e na ordem de inserção dos dados.
    
//     var instrucaoRelatorio = `
//         INSERT INTO Relatorio (CNH, dirige, possuiMoto) VALUES ('${possuiCNH}', '${dirige}', '${possuiMoto}');
//     `;
    
//     var instrucaocep = `
//         INSERT INTO Endereco (CEP, Rua, Bairro, Cidade) VALUES ('${cep}', '${rua}', '${bairro}', '${cidade}');
//     `;
    
//     console.log("Executando a instrução SQL: \n" + instrucaoRelatorio);
//     var resultadoRelatorio = database.executar(instrucaoRelatorio);

//     console.log("Executando a instrução SQL: \n" + instrucaocep);
//     var resultadoEndereco = database.executar(instrucaocep);

//     // Verificar se as operações foram bem-sucedidas
//     if (resultadoRelatorio && resultadoEndereco) {
//         // Utilize as funções LAST_INSERT_ID() ou equivalentes para obter os IDs gerados automaticamente pelo banco de dados
//         var instrucao = `
//             INSERT INTO Cliente (Nome, Email, Senha, fkEndereco, fkRelatorio) 
//             VALUES ('${nome}', '${email}', '${senha}', LAST_INSERT_ID(), LAST_INSERT_ID());
//         `;
//     console.log("Executando a instrução SQL: \n" + instrucao);
//     return database.executar(instrucao);
//     }
// }