import React, { Component } from "react";
import { Link } from "react-router-dom";
import { getDateString } from "../../helpers/misc";
class Project extends Component {
  render() {
    const { id, author, title, published } = this.props.project;
    const dateString = getDateString(published.seconds * 1000);

    return (
      <li className="list-group-item">
        <h4>
          <Link to={`projects/${id}`}>{title}</Link>
        </h4>
        <p>
          By {author} <br /> {published ? dateString : null}
        </p>
      </li>
    );
  }
}

export default Project;
