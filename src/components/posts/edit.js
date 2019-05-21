import React, { Component } from "react";
import { Link } from "react-router-dom";
import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { UpdateProject } from "../../actions/projectActions";

class EditProject extends Component {
  state = {
    id: this.props.match.params.id,
    title: "",
    author: "",
    content: "",
    published: "",
    modified: new Date(),
    errors: {}
  };
  constructor(props) {
    super(props);
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
    const { project } = this.props;
    console.log("project");
    console.log(project);
    this.setState({
      title: project.title,
      content: project.content,
      author: project.author,
      published: project.published
    });
    console.log("state");
    console.log(this.state);
    const Proj = {
      id: this.state.id,
      title: this.titleInput.current.value,
      content: this.contentInput.current.value,
      author: project.author,
      published: project.published,
      modified: this.state.modified
    };
    console.log("Proj");
    console.log(Proj);
    this.props.UpdateProject(Proj);
    this.props.history.push(`/projects/${this.props.match.params.id}`);
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { project } = this.props;

    if (project) {
      return (
        <div className="container margin-top">
          <div className="row">
            <div className="col-md-12 content ">
              <div className="detail">
                <p>
                  <i className="fas fa-arrow-alt-circle-left appFont2" />
                  <Link to={`/projects/${this.props.match.params.id}`}>
                    back to project
                  </Link>
                </p>

                <div className="card-header">
                  <h4>Edit project</h4>
                </div>
                <div className="card-body">
                  <form onSubmit={this.onSubmit}>
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
                        onChange={this.onChange}
                      />
                    </div>
                    <div className="form-group">
                      <label>Description</label>
                      <textarea
                        className="form-control"
                        label="project"
                        name="content"
                        ref={this.contentInput}
                        placeholder=""
                        defaultValue={project.content}
                        onChange={this.onChange}
                      />
                    </div>

                    <input
                      type="submit"
                      value="Update"
                      className="btn btn-primary"
                    />
                  </form>
                </div>
              </div>
            </div>
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

//export default EditProject;
const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const projects = state.firestore.data.projects;
  const project = projects ? projects[id] : null;
  return { project: project };
};
const mapDispatchToProps = dispatch => {
  return {
    UpdateProject: project => dispatch(UpdateProject(project))
  };
};
export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  firestoreConnect([{ collection: "projects" }])
)(EditProject);
