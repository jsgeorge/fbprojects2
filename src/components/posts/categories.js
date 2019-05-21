import React, { Component } from "react";
//import { Link } from "react-router-dom";
import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
//import PropTypes from "prop-types";
//import Post from "./post";
import { getDateString } from "../../helpers/misc";

class Notifications extends Component {
  render() {
    const { notifications } = this.props;

    return (
      <div className="notify-wrapper">
        <h5>Notifications</h5>
        {notifications && notifications.length > 0 ? (
          <div>
            <React.Fragment>
              <ul className="list-group ">
                {notifications.map(note => (
                  <li className="list-group-item note-item" key={note.id}>
                    <strong className="note-user">{note.username}</strong>{" "}
                    {note.action} <br />
                    <span className="dateTime">
                      {note.submitDate
                        ? getDateString(note.submitDate.seconds * 1000)
                        : null}
                    </span>
                  </li>
                ))}
              </ul>
            </React.Fragment>
          </div>
        ) : (
          <p>No notifications</p>
        )}
      </div>
    );
  }
}
// Notifications.propTypes = {
//   firestore: PropTypes.object.isRequired,
//   notifications: PropTypes.array
// };
// export default compose(
//   firestoreConnect([{ collection: "notifications" }]),
//   connect((state, props) => ({
//     notifications: state.firestore.ordered.notifications
//   }))
// )(Notifications);
//export default Notifications;
const mapStateToProps = state => {
  return {
    notifications: state.firestore.ordered.notifications
  };
};
export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: "notifications", orderBy: ["submitDate", "desc"] }
  ])
)(Notifications);
