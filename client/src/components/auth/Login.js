import React, { Component } from "react";

import "../css/Login.css";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit(e) {
    e.preventDefault();

    const user = {
      email: this.state.email,
      password: this.state.password
    };

    console.log(user);
  }

  render() {
    return (
      <div className="row">
        <div className="col s12">
          <div className="container">
            <div id="login-page" className="row">
              <div className="col s12 m6 l6 z-depth-4 card-panel border-radius-6 login-card bg-opacity-8">
                <form className="login-form" onSubmit={this.onSubmit}>
                  <div className="row">
                    <div className="input-field col s12">
                      <h5 className="ml-4">Sign in</h5>
                    </div>
                  </div>
                  <div className="row margin">
                    <div className="input-field col s12">
                      <i className="material-icons prefix pt-2">
                        person_outline
                      </i>
                      <input
                        id="email"
                        name="email"
                        type="text"
                        value={this.state.email}
                        onChange={this.onChange}
                      />
                      <label htmlFor="username" className="center-align">
                        Username
                      </label>
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
                      <label htmlFor="password">Password</label>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col s12 m12 l12 ml-2 mt-1">
                      <p>
                        <label>
                          <input type="checkbox" />
                          <span>Remember Me</span>
                        </label>
                      </p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="input-field col s12">
                      <button
                        type="submit"
                        className="btn waves-effect waves-light border-round gradient-45deg-purple-deep-orange col s12"
                      >
                        Login
                      </button>
                    </div>
                  </div>
                  <div className="row">
                    <div className="input-field col s6 m6 l6">
                      <p className="margin medium-small">
                        <a href="user-register.html">Register Now!</a>
                      </p>
                    </div>
                    <div className="input-field col s6 m6 l6">
                      <p className="margin right-align medium-small">
                        <a href="user-forgot-password.html">
                          Forgot password ?
                        </a>
                      </p>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
