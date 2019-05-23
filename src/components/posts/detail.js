import React, { Component } from "react";
import { Link } from "react-router-dom";
import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { getDateString } from "../../helpers/misc";
//import PropTypes from "prop-types";
import { DeleteProject } from "../../actions/projectActions";
import { ChangeStatus } from "../../actions/projectActions";

class Detail extends Component {
  state = {
    showChgStatus: false,
    id: this.props.match.params.id,
    changed: new Date()
  };
  chgStatus = () => {
    this.setState({ showChgStatus: !this.state.showChgStatus });
  };
  selStatus = level => {
    const { project } = this.props;

    const proj = {
      id: this.state.id,
      title: project.title,
      content: project.content,
      author: project.author,
      published: project.published,
      changed: this.state.changed,
      priority: project.priority,
      status: level
    };
    console.log(proj);
    this.props.ChangeStatus(proj);
    this.setState({ showChgStatus: false });
  };
  renderLevel = name => (
    <button className="btnStatus" onClick={() => this.chgStatus()}>
      <div className={`${name}`}>{name}</div>
    </button>
  );
  renderSelLevel = (level, name) => (
    <button className="btnStatus" onClick={() => this.selStatus(level)}>
      <div className={`${name}`}>{name}</div>
    </button>
  );
  renderPriority = name => <div className={`${name}`}>{name}</div>;

  onDelete = () => {
    //this.props.firestore.collection("projects").doc(this.props.project.id);
    // this.props.history.push("/");
    this.props.DeleteProject(this.state.id);
    this.props.history.push("/projects");
  };
  render() {
    if (this.props.project) {
      const {
        author,
        title,
        published,
        modified,
        content,
        status,
        priority
      } = this.props.project;
      const { levels, priorities } = this.props;

      const dateString = getDateString(published.seconds * 1000);
      let modString = "";
      if (modified) {
        modString = getDateString(published.seconds * 1000);
      }
      return (
        <div className="container  margin-top">
          <div className="row">
            <div className="col-md-12 content ">
              <div className="detail">
                <p>
                  <i className="fas fa-arrow-alt-circle-left appFont2" />
                  <Link to="/projects">back to projects</Link>
                </p>
                <div class="left">
                  <div>
                    <h4>{title}</h4>
                  </div>
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
                <div class="right">
                  Priority <br />
                  {priorities && priorities.length > 0
                    ? this.renderPriority(priorities[priority].name)
                    : null}
                  Status
                  <br />
                  {levels && levels.length > 0
                    ? this.renderLevel(levels[status].name)
                    : null}{" "}
                  <br />
                  {this.state.showChgStatus && levels && levels.length > 0 ? (
                    <div className="chgStatusPanel">
                      {this.renderSelLevel(0, levels[0].name)}
                      {this.renderSelLevel(1, levels[1].name)}
                      {this.renderSelLevel(2, levels[2].name)}
                      {this.renderSelLevel(3, levels[3].name)}
                      {this.renderSelLevel(4, levels[4].name)}
                      {this.renderSelLevel(5, levels[5].name)}
                    </div>
                  ) : null}
                  <br />
                </div>
                <div className="detail-content">
                  <h5>Description</h5>
                  <p>{content}</p>
                  <p>ProjID: {this.props.match.params.id}</p>
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
  return {
    levels: state.firestore.ordered.levels,
    priorities: state.firestore.ordered.priorities,
    project: project
  };
};
const mapDispatchToProps = dispatch => {
  return {
    DeleteProject: project => dispatch(DeleteProject(project)),
    ChangeStatus: project => dispatch(ChangeStatus(project))
  };
};

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  firestoreConnect([
    { collection: "projects" },
    { collection: "levels" },
    { collection: "priorities" }
  ])
)(Detail);
