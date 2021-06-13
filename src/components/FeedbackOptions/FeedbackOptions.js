import React from "react";
import shortId from "shortid";
import "../../styles/main.scss";
import PropTypes from "prop-types";

const FeedbackOptions = ({ options, onLeaveFeedback, capitalize }) => {
  return (
    <div className="stats">
      {Object.keys(options).map((key) => (
        <button
          className="stats__btn"
          key={shortId.generate()}
          onClick={onLeaveFeedback}
        >
          {capitalize(key)}
        </button>
      ))}
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.objectOf(PropTypes.number),
  onLeaveFeedback: PropTypes.func.isRequired,
  capitalize: PropTypes.func.isRequired,
};

export default FeedbackOptions;
