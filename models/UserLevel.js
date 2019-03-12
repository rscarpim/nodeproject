const Sequelize     = require('sequelize');
const DataBase      = require('../database/database');


/* Criando os Campos da Table Users. */
const UsersLevels = DataBase.define('tb_users_levels', {

    l_id:{
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
    }, 
    l_description:{
        allowNull:true,
        type: Sequelize.STRING(45)     
    }
});


module.exports = UsersLevels;