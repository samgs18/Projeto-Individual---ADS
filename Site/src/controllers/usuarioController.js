var usuarioModel = require("../models/usuarioModel");
var aquarioModel = require("../models/aquarioModel");

function autenticar(req, res) {
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;

    if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está indefinida!");
    } else {

        usuarioModel.autenticar(email, senha)
            .then(
                function (resultadoAutenticar) {
                    console.log(`\nResultados encontrados: ${resultadoAutenticar.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultadoAutenticar)}`); // transforma JSON em String

                    if (resultadoAutenticar.length == 1) {
                        console.log(resultadoAutenticar);

                        aquarioModel.buscarAquariosPorEmpresa(resultadoAutenticar[0].empresaId)
                            .then((resultadoAquarios) => {
                                if (resultadoAquarios.length > 0) {
                                    res.json({
                                        id: resultadoAutenticar[0].id,
                                        cep: resultadoAutenticar[0].cep,
                                        email: resultadoAutenticar[0].email,
                                        nome: resultadoAutenticar[0].nome,
                                        senha: resultadoAutenticar[0].senha
                                    });
                                } else {
                                    res.status(204).json({ aquarios: [] });
                                }
                            })
                    } else if (resultadoAutenticar.length == 0) {
                        res.status(403).send("Email e/ou senha inválido(s)");
                    } else {
                        res.status(403).send("Mais de um usuário com o mesmo login e senha!");
                    }
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }

}
// var idEndereco = "";

function cadastrar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var nome = req.body.nomeServer;
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;
    var cep = req.body.cepServer;
    var rua = req.body.ruaServer;
    var bairro = req.body.bairroServer;
    var cidade = req.body.cidadeServer;
    var estado = req.body.estadoServer;
    var possuiCNH = req.body.possuiCNHServer;
    var possuiMoto = req.body.possuiMotoServer;
    var dirige = req.body.dirigeServer;
    buscarPorId();
    buscarPorIdRelatorio();
    

    // Faça as validações dos valores
    if (nome == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (cep == undefined) {
        res.status(400).send("Seu cpf está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está undefined!");
    // } else if (empresaId == undefined) {
    //     res.status(400).send("Sua empresa está undefined!");
    } else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        usuarioModel.cadastrar(nome, email, senha, cep, rua, bairro, cidade, estado, possuiCNH, possuiMoto, dirige)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}
function buscarPorId(req, res) {
    var idEndereco = req.params.idEndereco;
  
    empresaModel.buscarPorId(idEndereco).then((resultado) => {
      res.status(200).json(resultado);
    });
  }
function buscarPorIdRelatorio(req, res) {
    var idRelatorio = req.params.idRelatorio;
  
    empresaModel.buscarPorIdRelatorio(idRelatorio).then((resultado) => {
      res.status(200).json(resultado);
    });
  }
// function buscarid(CEP, Rua, Bairro, Cidade) { // Definição da função para buscar o id do usuário com base no email e senha

//     usuarioModel.buscarid(email, senha).then( // Chama a função para buscar o id do usuário com base no email e senha fornecidos
//         function (resultado) { // Verificação de sucesso da chamada
           
//             idEndereco = resultado[0].idEndereco; // Atribui o id do usuário ao idUsuario
//             cadastrarcliente(Nome, Email, Senha); // Chama a função para cadastrar a experiência com o tempo, grau e experiência fornecidos

//         }
//     )
// }

module.exports = {
    autenticar,
    cadastrar
}