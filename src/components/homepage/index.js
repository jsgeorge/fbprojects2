import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { compose } from "redux";
import { connect } from "react-redux";
import Featured from "./featured";
import VenueInfo from "./venueInfo";
import Highlights from "./highlights";
import Pricing from "./pricing";

class HomePage extends Component {
  render() {
    const { auth } = this.props;
    if (auth.uid) return <Redirect to="/projects" />;

    return (
      <div>
        <Featured />
        {/* <VenueInfo />*/}
        <Highlights />
        {/* <Pricing />  */}
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
