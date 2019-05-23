import React, { Component } from "react";
import TextInputGroup from "../layout/TextInputGroup";
import { Link, Redirect } from "react-router-dom";
import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
//import PropTypes from "prop-types";
import { CreateProject } from "../../actions/projectActions";

class AddPost extends Component {
  state = {
    author: "",
    title: "",
    content: "",
    published: new Date(),
    priority: 0,
    errors: {}
  };
  renderPriority = name => <div className={`${name}`}>{name}</div>;

  onSubmit = e => {
    e.preventDefault();
    // this.props.firestore.add("projects", this.state);
    // let notif = {
    //   username: this.state.author,
    //   action: "Submitted a project"
    // };
    // this.props.firestore.add("notifications", notif);
    this.props.CreateProject(this.state);
    this.props.history.push("/projects");
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  renderPriorities = priorities => {
    priorities.map(item => <div className={`${item.name}`}>{item.name}</div>);
  };
  render() {
    const { auth } = this.props;

    if (!auth.uid) return <Redirect to="/auth/login" />;

    const { title, content, priority, errors } = this.state;
    const { priorities } = this.props;

    return (
      <div className="container  margin-top">
        <div className="row">
          <div className="col-md-12 content ">
            <div className="card mb-3">
              <p>
                <i className="fas fa-arrow-alt-circle-left appFont2" />
                <Link to="/projects">back to projects</Link>
              </p>
              <div className="card-header">
                <h4>New Project</h4>
              </div>
              <div className="card-body">
                <form onSubmit={this.onSubmit}>
                  <TextInputGroup
                    label="Title"
                    name="title"
                    value={title}
                    onChange={this.onChange}
                    error={errors.title}
                  />
                  <label>Priority</label>
                  <br />
                  <div className="panel">
                    {priorities && priorities.length > 0
                      ? this.renderPriorities(priorities)
                      : null}
                  </div>
                  <select
                    name="priority"
                    value={priority}
                    onChange={this.onChange}
                    error={errors.priority}
                  >
                    <option value="0">Low</option>
                    <option value="1">Medium</option>
                    <option value="2">High</option>
                  </select>
                  <br />
                  <label>Description</label>
                  <br />
                  <textarea
                    className="form-control"
                    label="Details"
                    name="content"
                    type="text"
                    value={content}
                    onChange={this.onChange}
                    error={errors.content}
                    rows="6"
                  />

                  <input
                    type="submit"
                    value="Add Project"
                    className="btn btn-primary"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// AddPost.prototypes = {
//   firestore: PropTypes.object.isRequired,
//   projects: PropTypes.array,
//   notifications: PropTypes.array,
//   auth: PropTypes.object.isRequired
// };

// export default compose(
//   firestoreConnect(),
//   connect((state, props) => ({
//     auth: state.firebase.auth
//   }))
// )(AddPost);
const mapStateToProps = state => {
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile,
    priorities: state.firestore.ordered.priorities
  };
};

const mapDispatchToProps = dispatch => {
  return {
    CreateProject: project => dispatch(CreateProject(project))
  };
};
export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  firestoreConnect([{ collection: "priorities" }])
)(AddPost);
