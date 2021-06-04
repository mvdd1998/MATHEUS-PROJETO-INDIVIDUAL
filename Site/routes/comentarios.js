var express = require('express');
var router = express.Router();
var sequelize = require('../models').sequelize;
var Comentar = require('../models').Comentar;

// Realiza o comentario na publicacao
router.post('/comentar/:idusuario', function(req, res, next){
    console.log("Iniciando Comentario")

    let idusuario = req.params.idusuario;

    Comentar.create({
        comentario: req.body.comentario,
        fkusuario: idusuario
    }).then(resultado => {
        console.log("Post Concluído");
        res.send(resultado);
    }).catch(erro => {
        console.log("Deu Ruim")
        console.error(erro);
        res.status(500).send(erro.message);
    })

})


// Abaixo recupera as publicações

router.get('/', function (req, res, next) {
        console.log('Recupera as publicações');

    let instrucaoSql = `SELECT 
    usuario.nome, 
    comentario.comentar from comentar FROM
    usuario JOIN comentar ON comentar.fk_usuario = usuario.idusuario
    ORDER BY comentario.idcomentar DESC`;

    sequelize.query(instrucaoSql, {
        model: Comentar,
        mapToModel: true
    })
    .then(resultado => {
        console.log(`Encontrados: ${resultado.length}`);
        res.json(resultado);
    }).catch(erro =>{
        console.error(erro);
        res.status(500).send(erro.message);
    });
});


router.get('/:idUsuario', function(req, res, next) {
	console.log('Recuperando todas as publicações');
	
	var idusuario = req.params.idusuario;

    let instrucaoSql = `SELECT 
    usuario.nome,
    descricao
    FROM comentario
    INNER JOIN usuario
    ON comentar.fk_usuario = usuario.idusuario
    WHERE fk_usuario = ${idusuario}
    ORDER BY publicacao.id DESC`;

	sequelize.query(instrucaoSql, {
		model: Comentar,
		mapToModel: true 
	})
	.then(resultado => {
		console.log(`Encontrados: ${resultado.length}`);
		res.json(resultado);
	}).catch(erro => {
		console.error(erro);
		res.status(500).send(erro.message);
	});
});

module.exports = router;
