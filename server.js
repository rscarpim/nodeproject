const http          = require('http');
const express       = require('express');
const sequelize     = require("./database/database");
const bodyParser    = require('body-parser');

/* Routes. */
const usersRoutes   = require('./routes/api/Users');





const app           = express(express.json());

/* Body parser Middleware. */
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());



/* Using the Routes. */
app.use('/api/Users', usersRoutes);





sequelize.sync({ force: false }).then(() => {

    const port = process.env.PORT || 3000;

    app.set("port", port);

    const server = http.createServer(app);

    server.listen(port);
});


