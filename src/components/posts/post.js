import React, { Component } from "react";
import { Link } from "react-router-dom";
import { getDateString } from "../../helpers/misc";
import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";

class Project extends Component {
  renderLevel = name => <div className={`${name}`}>{name}</div>;
  renderPriority = name => <div className={`${name}`}>{name}</div>;

  render() {
    const {
      id,
      author,
      title,
      published,
      status,
      priority
    } = this.props.project;
    const dateString = getDateString(published.seconds * 1000);
    const { levels, priorities } = this.props;

    return (
      <li className="list-group-item proj-item">
        <div className="left">
          <Link to={`projects/${id}`}>
            <h6>{title}</h6>
            <p className="dateTime">
              <strong>Submitted By</strong> {author} <br />
              <strong>Created on </strong> {published ? dateString : null}
              <br />
              <strong>Timeline</strong> May 7 - 17
            </p>
          </Link>
        </div>
        <div className="right">
          Priority
          <br />
          {priorities && priorities.length > 0
            ? this.renderPriority(priorities[priority].name)
            : null}{" "}
          Status
          <br />
          {levels && levels.length > 0
            ? this.renderLevel(levels[status].name)
            : null}
        </div>
      </li>
    );
  }
}

const mapStateToProps = state => {
  return {
    levels: state.firestore.ordered.levels,
    priorities: state.firestore.ordered.priorities
  };
};
export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "levels" }, { collection: "priorities" }])
)(Project);
