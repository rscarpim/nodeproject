const express = require("express");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const keys = require("../../config/config");
const passport = require("passport");

/* Load the Input Validations. */
const validateRegisterInput = require("../../validation/register");
const validateLoginInput = require("../../validation/login");

/* Load the User Model. */
const User = require("../../models/User");

/* 
    POST    : api/users/register
    Desc    : Register a new user.
    Access  : Public
    Created@: 3/11/2019
    Author  : Ricardo Scarpim.
*/
router.post("/register", (req, res) => {
  /* Validating. */
  const { errors, isValid } = validateRegisterInput(req.body);
  /* IF threre's errors. */
  if (!isValid) {
    return res.status(400).json(errors);
  }

  /* Search for an Existing User. */
  User.find({
    where: {
      u_login: {
        [Op.eq]: req.body.login
      }
    }
  }).then(user => {
    if (user) {
      /* Setting the Error. */
      errors.email = "Ooops, User Already Exists !";
      return res.status(400).json(errors);
    } else {
      /* Creating the New User */
      const newUser = new User({
        u_login: req.body.login,
        u_password: req.body.password
      });

      /* Generating the Encryptation for the Password. */
      bcrypt.genSalt(10, (err, salt) => {
        if (err) throw err;

        bcrypt.hash(newUser.u_password, salt, (err, hash) => {
          if (err) throw err;

          /* Saving the Information on the Database. */
          User.create({
            u_login: req.body.login,
            u_password: (newUser.u_password = hash),
            u_name_first: req.body.name
          })
            .then(user => res.json(user))
            .catch(err => console.log(err));
        });
      });
    }
  });
});

/* 
    POST    : api/users/login
    Desc    : Login user / Returning a User Token JWT.
    Access  : Public
    Created@: 3/11/2019
    Author  : Ricardo Scarpim.
*/
router.post("/login", (req, res) => {
  /* Validating. */
  const { errors, isValid } = validateLoginInput(req.body);
  /* IF threre's errors. */
  if (!isValid) {
    return res.status(400).json(errors);
  }

  /* Get the POST Information */
  const vEmail = req.body.login;
  const vPassword = req.body.password;

  /* Search for the User by Email. */
  User.findOne({
    where: {
      u_login: {
        [Op.eq]: vEmail
      }
    }
  }).then(user => {
    /* If the User NOT Match. */
    if (!user) {
      errors.email = "User not found !";
      return res.status(404).json(errors);
    }

    /* IF the user is Founded, check passwords */
    bcrypt.compare(vPassword, user.u_password).then(isMatch => {
      /* The Passwords Match*/
      if (isMatch) {
        /* Creating the JWT Token. */
        const payload = {
          id: user.u_id,
          login: user.u_login,
          name: user.u_name_first
        };

        /* Creating the Token */
        jwt.sign(
          payload,
          keys.secretOrKey,
          { expiresIn: 3600 },
          (err, token) => {
            res.json({ success: true, token: "Bearer " + token });
          }
        );
      } else {
        errors.password = "Password is Incorrect !";
        return res.status(400).json(errors);
      }
    });
  });
});

/* 
    GET    : api/users/current
    Desc    : Return Current Users
    Access  : Private
    Created@: 3/11/2019
    Author  : Ricardo Scarpim.
*/
router.get(
  "/current",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    res.json({
      id: req.user.u_id,
      login: req.user.u_login,
      NameFirst: req.user.u_name_first
    });
  }
);

router.get("/all", (req, res) => {
  User.findAll().then(user => {
    return res.json(user);
  });
});

module.exports = router;
