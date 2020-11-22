


module.exports = function(){
    var express = require('express');
    var bodyParser = require('body-parser');
    var expressValidator = require('express-validator');

    var app = express();

    app.set('view engine', 'ejs');
    app.set('views', './app/views');

    
    //Configuração para transformar formulário em json
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}))

    //Configuração validador do formulário
    app.use(expressValidator());


    var rotas = require('../app/routes/web');
    rotas(app);

    app.listen(8000,function(){
        console.log("localhost:8000");
    });
    
};