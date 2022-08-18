const Sequelize = require('sequelize');
const sequelize = new Sequelize('filmes','root','',{
    host:'127.0.0.1',
    dialect:'mysql',
    define: {
        charset: 'utf8',
        colatte: 'utf8_general_ci',
        timestamps: true
    },
    logging: false
});

sequelize.authenticate().then(function(){
     //////////////
     console.log('conectado com sucesso');
}).catch(function(err){
     /////////////
     console.log('falha ao conectar com o banco de dados erro'+err);
})


module.exports = {Sequelize, sequelize} 