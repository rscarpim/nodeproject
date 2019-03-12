const Sequelize     = require('sequelize');
const sequelize     = require('../database/database');

/* Create's the user's Table named tb_users. */
const Users = sequelize.define('tb_users', {

    u_id:{
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
    },
    u_login:{
        allowNull:true,
        type: Sequelize.STRING(255),
        validate:{
            len: [2, 255]
        }
    },
    u_password:{
        allowNull:false,
        type: Sequelize.STRING(255),
        validate: {
            len: [2, 255]
        }        
    },
    u_level_id:{
        allowNull: true,
        type: Sequelize.INTEGER
    },
    u_name_first:{
        allowNull: true,
        type: Sequelize.STRING(45)
    },
    u_name_last:{
        allowNull: true,
        type: Sequelize.STRING(45)
    }
});


module.exports = Users;