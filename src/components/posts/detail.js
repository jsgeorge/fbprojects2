import React, { Component } from "react";
import { Link } from "react-router-dom";
import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
//import PropTypes from "prop-types";

class Detail extends Component {
  onDelete = () => {
    console.log(this.props.project.id);
    // this.props.firestore.collection("projects").doc(this.props.project.id);
    // this.props.history.push("/");
  };
  render() {
    const { project } = this.props;
    if (project) {
      return (
        <div>
          <div className="card mb-3">
            <div className="card-body">
              <p>
                <i class="fas fa-arrow-alt-circle-left appFont2" />
                <Link to="/projects">back to projects</Link>
                <span className="listingCmds">
                  <Link
                    to={`${project.id}/edit`}
                    class="btn btn-success btn-sm bkdBlack"
                  >
                    Edit
                  </Link>

                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => this.onDelete()}
                  >
                    Delete
                  </button>
                </span>
              </p>
              <h6>{project.author}</h6>

              <h3>{project.title}</h3>
              <p>{project.content}</p>
            </div>
          </div>
        </div>
      ); //end return html
    } else {
      return "Loading...";
    } // end if project
  } //end render
} // end class

// export default compose(
//   firestoreConnect(props => [
//     { collection: "projects", storeAs: "project", doc: props.match.params.id }
//   ]),
//   connect(({ firestore: { ordered } }, props) => ({
//     project: ordered.project && ordered.project[0] // lodash's get can also be used
//   }))
// )(Detail);
//export default Detail;

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const projects = state.firestore.data.projects;
  const project = projects ? projects[id] : null;
  return { project: project };
};
export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "projects" }])
)(Detail);
