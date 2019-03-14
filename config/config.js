module.exports = {
    development:{
        database:{
            host: 'localhost',
            port: 3306,
            name: 'db_io',
            dialect: 'mysql',
            user: 'root',
            password: ''
        }
    },
    production:{
        database:{
            host: process.env.DB_HOST,
            port: process.env.DB_PORT
        }
    },
    secretOrKey: 'FCK-secret'
}