import React from "react";
import { Link } from "react-router-dom";
import { compose } from "redux";
import { connect } from "react-redux";
//import { DisplayUser } from "./displayuser";
import { UserLogout } from "../../actions/authActions";

const Navbar = props => {
  const onLogout = () => {
    props.UserLogout();
    window.location.href = `/`;
  };

  const { branding, profile, auth } = props;
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-3 py-0 fixed-top  ">
        <div className="container">
          {auth.uid ? (
            <Link to="/projects" className="navbar-brand" />
          ) : (
            <Link to="/" className="navbar-brand" />
          )}

          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarSupportedContent"
          >
            {auth.uid ? (
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link to="/about" className="nav-link">
                    About
                  </Link>
                </li>

                <li className="nav-item">
                  <Link to="/projects" className="nav-link">
                    Projects
                  </Link>
                </li>

                <li className="nav-item">
                  <Link to="/settings" className="nav-link">
                    Settings
                  </Link>
                </li>

                <li className="nav-item">
                  <Link to="/projects/add" className="nav-link btnNew">
                    New Project
                  </Link>
                </li>

                <li className="nav-item">
                  <Link to="/user" className="nav-link">
                    <span className="user-logo">{profile.initials}</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <button onClick={() => onLogout()} className="nav-link">
                    Logout
                  </button>
                </li>
              </ul>
            ) : (
              <ul className="navbar-nav ">
                <li className="nav-item">
                  <Link to="/about" className="nav-link">
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/auth/login" className="nav-link">
                    Login
                  </Link>
                </li>

                <li className="nav-item">
                  <Link to="/auth/register" className="nav-link">
                    Register
                  </Link>
                </li>
              </ul>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};
const mapStateToProps = state => {
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile
  };
};
const mapDispatchToProps = dispatch => {
  return {
    UserLogout: () => dispatch(UserLogout())
  };
};
export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(Navbar);
