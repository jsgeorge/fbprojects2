import React, { Component } from "react";
import { Link } from "react-router-dom";

class HomePage extends Component {
  render() {
    return (
      <div className="home-wrapper">
        <h3>FirebaseProject</h3>
        <div className="home-link-wrapper">
          <ul>
            <li>
              <Link to="/auth/login" className="home-link">
                Log in
              </Link>
            </li>
            <li>
              <Link to="/auth/register" className="home-link">
                Register
              </Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default HomePage;
