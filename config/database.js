
var mysql      = require('mysql');
var conexao = function(){
    return mysql.createConnection({
        host     : '127.0.0.1',
        user     : 'root',
        password : '',
        database: 'curso_node'
      });
}

module.exports = conexao;