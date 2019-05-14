import React, { Component } from "react";
import { Link } from "react-router-dom";
// import { compose } from "redux";
// import { connect } from "react-redux";
//import { firestoreConnect } from "react-redux-firebase";

class EditProject extends Component {
  projectId = this.props.match.params.id;

  constructor(props) {
    super(props);
    this.categoryInput = React.createRef();
    this.authorInput = React.createRef();
    this.titleInput = React.createRef();
    this.contentInput = React.createRef();
  }
  onSubmit = e => {
    e.preventDefault();
    // const { project, firestore, history } = this.props;

    // const updproject = {
    //   author: this.authorInput.current.value,
    //   title: this.titleInput.current.value,
    //   content: this.contentInput.current.value
    // };
    // firestore
    //   .update({ collection: "projects", doc: project.id }, updproject)
    //   .then(history.push("/projects"));
  };

  render() {
    const { project } = this.props;

    if (project) {
      return (
        <div className="card mb-3">
          <p>
            <i class="fas fa-arrow-alt-circle-left appFont2" />
            <Link to={`/projects/${this.projectId}`}>back to project</Link>
          </p>

          <div className="card-header">
            <h4>Edit project</h4>
          </div>
          <div className="card-body">
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <label>Author</label>
                <input
                  type="text"
                  className="form-control"
                  label="Author"
                  name="author"
                  ref={this.authorInput}
                  defaultValue={project.author}
                />
              </div>

              <div className="form-group">
                <label>Title</label>
                <input
                  type="text"
                  className="form-control"
                  label="Title"
                  name="title"
                  placeholder="Enter title"
                  ref={this.titleInput}
                  defaultValue={project.title}
                />
              </div>
              <div className="form-group">
                <label>project</label>
                <input
                  type="text"
                  className="form-control"
                  label="project"
                  name="content"
                  ref={this.contentInput}
                  placeholder="Enter content"
                  defaultValue={project.content}
                />
              </div>

              <input type="submit" value="Update" className="btn btn-primary" />
            </form>
          </div>
        </div>
      );
    } else {
      return <p>Loading</p>;
    }
  }
}

// export default compose(
//   firestoreConnect(props => [
//     { collection: "projects", storeAs: "project", doc: props.match.params.id }
//   ]),
//   connect(({ firestore: { ordered } }, props) => ({
//     project: ordered.project && ordered.project[0] // lodash's get can also be used
//   }))
// )(EditProject);

export default EditProject;
