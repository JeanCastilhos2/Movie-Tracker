const db = require('./db');

const Filmes = db.sequelize.define('tabela_filmes',{
    
    id: {type: db.Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true
        },
    title: {type: db.Sequelize.STRING,
            allowNull: false,
        },
    poster_path: {type: db.Sequelize.STRING,
            allowNull: false,
        },
    vote_average: {type: db.Sequelize.INTEGER,
            allowNull: false,
        } 
})

Filmes.sync();

module.exports = Filmes;


