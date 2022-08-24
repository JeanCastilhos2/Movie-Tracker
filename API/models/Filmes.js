const db = require('../db/db_config');

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
        }, 
    add: {type: db.Sequelize.STRING,
            allowNull: false,
        } 
})

Filmes.sync();

module.exports = Filmes;


