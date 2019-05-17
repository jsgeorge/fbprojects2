import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { compose } from "redux";
import { connect } from "react-redux";
class HomePage extends Component {
  render() {
    const { auth } = this.props;
    if (auth.uid) return <Redirect to="/projects" />;

    return (
      <div>
        <div className="home-wrapper">
          <h4>Your first step to better way of running your business</h4>
          <div className="home-link-wrapper">
            <ul>
              <li>
                <Link to="/auth/login" className="home-login">
                  Log in
                </Link>
              </li>
              <li>
                <Link to="/auth/register" className="home-reg">
                  Register
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth
  };
};
export default compose(connect(mapStateToProps))(HomePage);
