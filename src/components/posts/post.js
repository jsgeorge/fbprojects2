import React, { Component } from "react";
import { Link } from "react-router-dom";
import { getDateString } from "../../helpers/misc";
class Project extends Component {
  render() {
    const { id, author, title, published } = this.props.project;
    const dateString = getDateString(published.seconds * 1000);

    return (
      <li className="list-group-item">
        <Link to={`projects/${id}`}>
          <h4>{title}</h4>
          <p className="dateTime">
            <strong>Submitted By {author}</strong> <br />
            <strong>Created on </strong> {published ? dateString : null}
          </p>
        </Link>
      </li>
    );
  }
}

export default Project;
