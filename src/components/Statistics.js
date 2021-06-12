import React from "react";
import shortId from "shortid";

const Statistics = ({ options, total, positivePercentage, capitalize }) => (
  <>
    <h2>Statistics</h2>

    {Object.entries(options).map(([key, value]) => (
      <p key={shortId.generate()}>
        {capitalize(key)}: {value}
      </p>
    ))}

    <p>Total: {total()}</p>

    <p>Positive feedback: {positivePercentage()}%</p>
  </>
);

export default Statistics;
