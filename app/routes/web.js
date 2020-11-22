//Importando model Cliente de forma Global
var clienteController = require('../controllers/clienteController');

//Montando as rotas
module.exports = function(app){
    app.get('/contato',function(request,response){
        response.render('site/contato');
    });
    
    app.get('/',function(request,response){
        clienteController.index(request,response);
    });

    app.post('/',function(request,response){
        clienteController.store(request,response);
    });

    app.get('/detalhe/:id', function(request, response){
        clienteController.show(request, response);
    });

};