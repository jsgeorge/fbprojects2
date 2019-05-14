import React, { Component } from "react";
//import { firebaseConnect } from "react-redux-firebase";
// import PropTypes from "prop-types";
import { compose } from "redux";
import { connect } from "react-redux";
//import { DisplayUser } from "./displayuser";
//import { UserLogout } from "../../actions/authActions";
import Navbar from "./navbar";

class Header extends Component {
  state = {
    isAuthenticated: false
  };

  static getDerivedStateFromProps(props, state) {
    const { auth } = props;
    if (auth.uid) {
      return { isAuthenticated: true };
    } else {
      return { isAuthenticated: false };
    }
  }

  render() {
    const { branding, auth } = this.props;
    const { isAuthenticated } = this.state;

    return (
      <div>
        {isAuthenticated ? (
          <Navbar
            branding={branding}
            auth={auth}
            isAuthenticated={isAuthenticated}
          />
        ) : null}
      </div>
    );
  }
}
// Header.propTypes = {
//   firebase: PropTypes.object.isRequired,
//   auth: PropTypes.object.isRequired
// };
const mapStateToProps = state => {
  console.log(state);
  return {
    auth: state.firebase.auth
  };
};

export default compose(connect(mapStateToProps))(Header);
//export default Header;
