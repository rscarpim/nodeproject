const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateLoginInput(data) {
  let errors = {};

  /* Ternary Operations. */

  data.login = !isEmpty(data.login) ? data.login : "";
  data.password = !isEmpty(data.password) ? data.password : "";

  /* If is NOT a valid email Format. */
  if (!Validator.isEmail(data.login)) {
    errors.login = "Email is Invalid !";
  }

  /* Empty Email Address.*/
  if (Validator.isEmpty(data.login)) {
    errors.login = "Email Field is Required.";
  }

  /* Empty Password*/
  if (Validator.isEmpty(data.password)) {
    errors.password = "Password Field is Required!";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
