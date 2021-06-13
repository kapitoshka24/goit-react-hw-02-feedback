import React from "react";
import "../../styles/main.scss";
import PropTypes from "prop-types";

const Notification = ({ message }) => <p className="notification">{message}</p>;

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;
