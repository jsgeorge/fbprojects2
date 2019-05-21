import React, { Component } from "react";
import TextInputGroup from "../layout/TextInputGroup";
//import PropTypes from "prop-types";

import { Redirect } from "react-router-dom";
//import { compose } from "redux";
import { connect } from "react-redux";
//import { firebaseConnect } from "react-redux-firebase";
//import { notifyUser } from "../../actions/notify";
import Alert from "../layout/alert";
import { UserLogin } from "../../actions/authActions";

class Login extends Component {
  state = {
    email: "",
    password: ""
  };

  onSubmit = e => {
    e.preventDefault();
    // const { email, password } = this.state;
    //const { firebase } = this.props;
    //console.log(email);
    // firebase
    //   .login({
    //     email,
    //     password
    //   })
    //   .then(response => {
    //     this.props.history.push("/projects");
    //   })
    //   .catch(err =>
    //     this.props.notifyUser("Invalid Username/Password", "error")
    //   );
    this.props.UserLogin(this.state);
    this.props.history.push("/projects");
  };
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    const { email, password } = this.state;
    //const { message, messageType } = this.props.notify;
    const { authError, auth } = this.props;
    if (auth.uid) return <Redirect to="/" />;

    return (
      <div className="container margin-top">
        <div className="row">
          <div className="col-md-6 offset-md-3 ">
            <div className="card">
              <div className="card-header">
                <h4 className="text-center appFont2">
                  <i className="fas fa-lock appFont" /> Login
                </h4>
              </div>
              <div className="card-body">
                {authError ? <Alert message={authError} type="error" /> : null}
                <form onSubmit={this.onSubmit}>
                  <TextInputGroup
                    label="Email"
                    name="email"
                    value={email}
                    onChange={this.onChange}
                    //error={errors.name}
                  />
                  <TextInputGroup
                    label="Password"
                    name="password"
                    type="password"
                    value={password}
                    onChange={this.onChange}
                    //error={errors.password}
                  />

                  <input
                    type="submit"
                    value="Login"
                    className="btn btn-primary btn-block"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// Login.propTypes = {
//   firebase: PropTypes.object.isRequired
// };
//export default firebaseConnect()(Login);

// export default compose(
//   firebaseConnect(),
//   connect(
//     (state, props) => ({
//       notify: state.notify
//     }),
//     { notifyUser }
//   )
// )(Login);
//export default Login;
const mapStateToProps = state => {
  return {
    authError: state.auth.authError,
    auth: state.firebase.auth
  };
};
const mapDispatchToProps = dispatch => {
  return {
    UserLogin: user => dispatch(UserLogin(user))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
