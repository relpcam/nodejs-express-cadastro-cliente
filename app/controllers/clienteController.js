//Importando model Cliente de forma Global
var clienteModel = require('../models/clienteModel')();

module.exports.index = function(request,response){
    clienteModel.all(function(error, resultado){
        response.render('site/home', {clientes: resultado, erros: {}, dados: {} });
    });
}

module.exports.store = function(request,response){

    var dados = request.body;
    request.check('nome', 'Preencha o campo Nome').notEmpty();
    request.check('email', 'Preencha um e-mail válido').isEmail();

    var validacaoErros = request.validationErrors();
    
    if(validacaoErros){
        console.log(validacaoErros);
        clienteModel.all(function(error, resultado){
            response.render('site/home', {clientes: resultado, erros: validacaoErros, dados: dados})
        });

    }
  

    return;

    clienteModel.save(dados,function(error, resultado){
        if (!error){
            response.redirect('/');
        }else{
            console.log('Erro ao adicionar o cliente');
            response.redirect('/');
        }
    });
}

module.exports.show = function(request, response){
    clienteModel.find(request.params.id, function(error, resultado){

        if (resultado[0] && !error){
            response.render('site/detalhe', {cliente:resultado[0]})
        }else{
            console.log('Esse cliente não existe');
            response.redirect('/');
        }

        
    });
}