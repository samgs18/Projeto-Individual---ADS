var express = require("express");
var router = express.Router();
var usuarioController = require("../controllers/usuarioController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrar", function (req, res) {
    usuarioController.cadastrar(req, res);
})

router.post("/autenticar", function (req, res) {
    usuarioController.autenticar(req, res);
})

router.post("/cadastrarEndereco", function (req, res) {
    usuarioController.cadastrarEndereco(req, res);
})

router.post("/cadastrarRelatorio", function (req, res) {
    usuarioController.cadastrarRelatorio(req, res);
});

// router.post("/buscaridEndereco" , function (req, res){
//     usuarioController.buscaridEndereco(req,res);
// });

// router.post("/buscaridRelatorio" , function (req, res){
//     usuarioController.buscaridRelatorio(req,res);
// });

module.exports = router;