var database = require('../../config/database');


module.exports = function(){

    //retornar todos os clientes
    this.all = function(retorno){
        var con = database();

        return con.query("SELECT * FROM clientes", retorno);
    
    };

    //Salvar cliente no banco de dados
    this.save = function($dados, retorno){
        var con = database();
        return con.query("INSERT INTO clientes set ?", $dados, retorno);
    };

    //Buscar cliente
    this.find = function(id, retorno){
        var con = database();
        
        return con.query("SELECT * FROM clientes WHERE id = ?", id, retorno);
    
    };

    return this;

};