import React, { Component } from "react";
import { Link } from "react-router-dom";
import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { getDateString } from "../../helpers/misc";
//import PropTypes from "prop-types";

class Detail extends Component {
  onDelete = () => {
    console.log(this.props.project.id);
    // this.props.firestore.collection("projects").doc(this.props.project.id);
    // this.props.history.push("/");
  };
  render() {
    const { id, author, title, published, content } = this.props.project;
    const dateString = getDateString(published.seconds * 1000);

    if (this.props.project) {
      return (
        <div className="container">
          <div class="row">
            <div className="col-md-12 content ">
              <div className="detail">
                <p>
                  <i class="fas fa-arrow-alt-circle-left appFont2" />
                  <Link to="/projects">back to projects</Link>
                  <span className="listingCmds">
                    <Link
                      to={`${id}/edit`}
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
                <h6>
                  {author} {published ? dateString : null}
                </h6>

                <h3>{title}</h3>
                <p>{content}</p>
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
export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "projects" }])
)(Detail);
