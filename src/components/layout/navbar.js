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

  const { branding, auth, isAuthenticated } = props;
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-3 py-0">
        <div className="container">
          {isAuthenticated ? (
            <Link to="/projects" className="navbar-brand">
              {branding}
            </Link>
          ) : (
            <Link to="/" className="navbar-brand">
              {branding}
            </Link>
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
            className="collapse navbar-collapse navbar-right"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav mr-auto ">
              {isAuthenticated ? (
                <li className="nav-item">
                  <Link to="/projects" className="nav-link">
                    Projects
                  </Link>
                </li>
              ) : null}
              {isAuthenticated ? (
                <li className="nav-item">
                  <Link to="/settings" className="nav-link">
                    Settings
                  </Link>
                </li>
              ) : null}
              {isAuthenticated ? (
                <li className="nav-item">
                  <Link to="/projects/add" className="nav-link btnNew">
                    New Project
                  </Link>
                </li>
              ) : null}

              {isAuthenticated ? (
                <li className="nav-item">
                  <Link to="/user" className="nav-link">
                    {auth.email.substring(0, auth.email.indexOf("@"))}
                  </Link>
                </li>
              ) : null}
              {isAuthenticated ? (
                <li className="nav-item">
                  <button onClick={() => onLogout()} className="nav-link">
                    Logout
                  </button>
                </li>
              ) : null}
              {!isAuthenticated ? (
                <li className="nav-item">
                  <Link to="/auth/login" className="nav-link">
                    Login
                  </Link>
                </li>
              ) : null}
              {!isAuthenticated ? (
                <li className="nav-item">
                  <Link to="/auth/register" className="nav-link">
                    Register
                  </Link>
                </li>
              ) : null}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
const mapDispatchToProps = dispatch => {
  return {
    UserLogout: () => dispatch(UserLogout())
  };
};
export default compose(
  connect(
    null,
    mapDispatchToProps
  )
)(Navbar);
