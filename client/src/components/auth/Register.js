import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { registerUser } from "../../actions/authActions";

import "../css/Register.css";

class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      login: "",
      email: "",
      password: "",
      password2: "",
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const newUser = {
      name: this.state.name,
      login: this.state.login,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    };

    console.log(newUser);

    this.props.registerUser(newUser);

    // axios
    //   .post("/api/users/register", newUser)
    //   .then(res => console.log(res.data))
    //   .catch(err => this.setState({ errors: err.response.data }));
  }

  render() {
    const { errors } = this.state;

    return (
      <div className="container">
        <div id="register-page" className="row">
          <div className="col s12 m8 l8 z-depth-4 card-panel border-radius-6 register-card bg-opacity-8">
            <form className="login-form" onSubmit={this.onSubmit}>
              <div className="row">
                <div className="input-field col s12">
                  <h5 className="ml-4">Register</h5>
                  <p className="ml-4">Join to our community now !</p>
                </div>
              </div>

              <div className="row margin">
                <div className="input-field col s12">
                  <i className="material-icons prefix pt-2">verified_user</i>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    className="validate"
                    value={this.state.name_first}
                    onChange={this.onChange}
                  />
                  {errors.name && (
                    <span className="helper-text red-text right ">
                      {errors.name}
                    </span>
                  )}
                  <label htmlFor="name" className="center-align">
                    First Name
                  </label>
                </div>
              </div>

              <div className="row margin">
                <div className="input-field col s12">
                  <i className="material-icons prefix pt-2">verified_user</i>
                  <input
                    id="login"
                    name="login"
                    type="text"
                    className="validate"
                    value={this.state.login}
                    onChange={this.onChange}
                  />
                  <label htmlFor="login" className="center-align">
                    Username
                  </label>
                </div>
              </div>

              <div className="row margin">
                <div className="input-field col s12">
                  <i className="material-icons prefix pt-2">mail_outline</i>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={this.state.email}
                    onChange={this.onChange}
                  />
                  <label htmlFor="email">Email</label>
                </div>
              </div>

              <div className="row margin">
                <div className="input-field col s12">
                  <i className="material-icons prefix pt-2">lock_outline</i>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    value={this.state.password}
                    onChange={this.onChange}
                  />
                  {errors.password && (
                    <span className="helper-text red-text right ">
                      {errors.password}
                    </span>
                  )}
                  <label htmlFor="password">Password</label>
                </div>
              </div>

              <div className="row margin">
                <div className="input-field col s12">
                  <i className="material-icons prefix pt-2">lock_outline</i>
                  <input
                    id="passwordAgain"
                    name="password2"
                    type="password"
                    value={this.state.password2}
                    onChange={this.onChange}
                  />
                  {errors.password2 && (
                    <span className="helper-text red-text right ">
                      {errors.password2}
                    </span>
                  )}
                  <label htmlFor="passwordAgain">Password again</label>
                </div>
              </div>

              <div className="row">
                <div className="input-field col s12">
                  <button
                    type="submit"
                    className="btn waves-effect waves-light border-round gradient-45deg-purple-deep-orange col s12"
                  >
                    Register
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  { registerUser }
)(Register);
