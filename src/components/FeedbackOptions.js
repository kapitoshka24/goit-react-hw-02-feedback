import React from "react";
import shortId from "shortid";
import "../styles/main.scss";

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

export default FeedbackOptions;
