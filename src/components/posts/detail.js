import React, { Component } from "react";
import { Link } from "react-router-dom";
import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { getDateString } from "../../helpers/misc";
//import PropTypes from "prop-types";
import { DeleteProject } from "../../actions/projectActions";

class Detail extends Component {
  state = {
    id: this.props.match.params.id
  };
  onDelete = () => {
    //this.props.firestore.collection("projects").doc(this.props.project.id);
    // this.props.history.push("/");
    this.props.DeleteProject(this.state);
    this.props.history.push("/projects");
  };
  render() {
    if (this.props.project) {
      const {
        author,
        title,
        published,
        modified,
        content
      } = this.props.project;
      const dateString = getDateString(published.seconds * 1000);
      let modString = "";
      if (modified) {
        modString = getDateString(published.seconds * 1000);
      }
      return (
        <div className="container">
          <div className="row">
            <div className="col-md-12 content ">
              <div className="detail">
                <p>
                  <i className="fas fa-arrow-alt-circle-left appFont2" />
                  <Link to="/projects">back to projects</Link>
                </p>
                <div>
                  <h4>{title}</h4>
                </div>
                <div className="detail-content">
                  <p>{content}</p>
                  <p>ProjID: {this.props.match.params.id}</p>
                  <h6 className="dateTime">
                    <strong>Submitted by </strong> {author} <br />
                    <strong>Created on </strong> {published ? dateString : null}
                    <br />
                    {modified ? (
                      <span>
                        <strong>Modified on </strong> {modString}
                        <br />
                      </span>
                    ) : null}
                  </h6>
                </div>
                <div className="listingCmds">
                  <Link
                    to={`${this.props.match.params.id}/edit`}
                    className="btn btn-success btn-sm bkdBlack"
                  >
                    Edit
                  </Link>

                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => this.onDelete()}
                  >
                    Delete
                  </button>
                </div>
              </div>
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
const mapDispatchToProps = dispatch => {
  return {
    DeleteProject: project => dispatch(DeleteProject(project))
  };
};
export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  firestoreConnect([{ collection: "projects" }])
)(Detail);
