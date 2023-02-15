const express = require('express');
const app = express();
const handlebars = require('express-handlebars');
const Sequelize = require('sequelize');

//Config Template Engine
// app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars.engine({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

//Conexão com o banco de dados MySql
const sequelize = new Sequelize('cerberus', 'root', 'Tec@1100', {
    host: 'localhost',
    dialect: 'mysql'
})

//Rotas
// app.get('/cad', function(req, res){
//     res.send('Rota de cadastro de posts');
// });

app.listen(3000, function(){
    console.log('Servidor rodando na url http://localhost:3000')
})