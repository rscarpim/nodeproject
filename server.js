const http       = require("http");
const express    = require("express");
const sequelize  = require("./database/database");
const bodyParser = require("body-parser");
const passport   = require("passport");

/* Routes. */
const usersRoutes = require("./routes/api/Users");

const app = express(express.json());

/* Body parser Middleware. */
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

/* Using the Routes. */
app.use("/api/Users", usersRoutes);

/* Passport Middleware */
app.use(passport.initialize());

/* Config the Passport. */
require("./config/passport")(passport);

sequelize.sync({ force: false }).then(() => {
  const port = process.env.PORT || 5000;

  app.set("port", port);

  const server = http.createServer(app);

  server.listen(port);
});
