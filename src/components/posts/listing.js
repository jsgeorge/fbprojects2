import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
//import PropTypes from "prop-types";
import Project from "./post";
//import { getProjects } from "../../actions/projectActions";

import Notifications from "./categories";
//import HomePage from "../homepage";

class Listing extends Component {
  state = {
    isAuthenticated: false
  };

  // static getDerivedStateFromProps(props, state) {
  //   const { auth } = props;
  //   if (auth.uid) {
  //     return { isAuthenticated: true };
  //   } else {
  //     return { isAuthenticated: false };
  //   }
  // }
  render() {
    const { projects, auth } = this.props;
    // const { isAuthenticated } = this.state;
    if (!auth.uid) return <Redirect to="/auth/login" />;
    return (
      <div className="container margin-top">
        <div className="row">
          <div className="col-md-8 col-sm-8 col-xs-12 content">
            <h5>Current Projects</h5>
            {projects && projects.length > 0 ? (
              <section>
                <ul className="table list-group project-wrapper">
                  {projects.map(project => (
                    <Project key={project.id} project={project} />
                  ))}
                </ul>
              </section>
            ) : (
              <div className="item">
                <p>No current projects</p>
              </div>
            )}
          </div>
          <div className="col-md-4 col-sm-4 col-xs-12 sidebar">
            <h5>Notifications</h5> <Notifications />
          </div>
        </div>
        )
      </div>
    );
  }
}
// Listing.propTypes = {
//   firestore: PropTypes.object.isRequired,
//   projects: PropTypes.array
// };
// export default compose(
//   firestoreConnect([{ collection: "projects" }]),
//   connect((state, props) => ({
//     auth: state.firebase.auth,
//     projects: state.firestore.ordered.projects
//   }))
// )(Listing);

const mapStateToProps = state => {
  return {
    projects: state.firestore.ordered.projects,
    auth: state.firebase.auth
  };
};
export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "projects", orderBy: ["published", "desc"] }])
)(Listing);
