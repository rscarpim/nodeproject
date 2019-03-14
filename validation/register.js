const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateRegisterInput(data) {
  let errors = {};

  /* Ternary Operations. */
  data.name = !isEmpty(data.name) ? data.name : "";
  data.login = !isEmpty(data.login) ? data.login : "";
  data.password = !isEmpty(data.password) ? data.password : "";
  data.password2 = !isEmpty(data.password2) ? data.password2 : "";

  /* Check the input Field NAME for string length*/
  if (!Validator.isLength(data.name, { min: 2, max: 30 })) {
    errors.name = "Name Field must have between 2 and 30 Characters.";
  }

  /* Empty name*/
  if (Validator.isEmpty(data.name)) {
    errors.name = "Name Field is Required!";
  }

  /* Empty Email Address.*/
  if (Validator.isEmpty(data.login)) {
    errors.login = "Email Field is Required.";
  }

  /* If is NOT a valid email Format. */
  if (!Validator.isEmail(data.login)) {
    errors.login = "Email is Invalid !";
  }

  /* Empty Password*/
  if (Validator.isEmpty(data.password)) {
    errors.password = "Password Field is Required!";
  }

  /* Empty re-type password, password2*/
  if (Validator.isEmpty(data.password2)) {
    errors.password2 = "Confirm Password Field is Required.";
  }

  /* Matching passwords. */
  if (!Validator.equals(data.password, data.password2)) {
    errors.password2 = "Passwords must match !";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
