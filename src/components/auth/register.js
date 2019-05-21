import React, { Component } from "react";
import TextInputGroup from "../layout/TextInputGroup";
//import PropTypes from "prop-types";

import { Redirect } from "react-router-dom";
//import { compose } from "redux";
import { connect } from "react-redux";
//import { firebaseConnect } from "react-redux-firebase";
//import { notifyUser } from "../../actions/notify";
import Alert from "../layout/alert";
import { UserRegister } from "../../actions/authActions";

class Register extends Component {
  state = {
    email: "",
    password: "",
    firstname: "",
    lastname: "",
    username: ""
  };

  onSubmit = e => {
    e.preventDefault();
    //const { email, password, username, firstname, lastname } = this.state;
    //const { firebase } = this.props;
    //console.log(email);
    // firebase
    //   .createUser({ email, password })
    //   .then(response => {
    //     this.props.history.push("/projects");
    //   })
    //   .catch(err =>
    //     this.props.notifyUser(
    //       "Registrtion unsuccessful or User email already exists",
    //       "error"
    //     )//
    //   );
    this.props.UserRegister(this.state);
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    const { email, password, username, firstname, lastname } = this.state;
    //const { message, messageType } = this.props.notify;
    const { authError, auth } = this.props;
    if (auth.uid) return <Redirect to="/" />;

    return (
      <div className="container  margin-top">
        <div className="row">
          <div className="col-md-6 offset-md-3 ">
            <div className="card">
              <div className="card-header appFont">
                <h4 className="text-center">Register</h4>
              </div>
              <div className="card-body">
                {authError ? (
                  <Alert message={authError} messageType={"error"} />
                ) : null}
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

                  <TextInputGroup
                    label="First Name"
                    name="firstname"
                    type="text"
                    value={firstname}
                    onChange={this.onChange}
                    //error={errors.password}
                  />
                  <TextInputGroup
                    label="Last Name"
                    name="lastname"
                    type="text"
                    value={lastname}
                    onChange={this.onChange}
                    //error={errors.password}
                  />
                  <TextInputGroup
                    label="Username"
                    name="username"
                    type="text"
                    value={username}
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

// Register.propTypes = {
//   firebase: PropTypes.object.isRequired
// };
// //export default firebaseConnect()(Login);

// export default compose(
//   firebaseConnect(),
//   connect(
//     (state, props) => ({
//       notify: state.notify
//     }),
//     { notifyUser }
//   )
// )(Register)
//xport default Register;
const mapStateToProps = state => {
  return {
    auth: state.firebase.auth,
    authError: state.auth.authError
  };
};
const mapDispatchToProps = dispatch => {
  return {
    UserRegister: user => dispatch(UserRegister(user))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Register);
