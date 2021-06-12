import React, { Component } from "react";
import Statistics from "./Statistics";
import FeedbackOptions from "./FeedbackOptions";
import Section from "./Section";
import Notification from "./Notification";
import "../styles/main.scss";

class Reviews extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  capitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  onLeaveFeedback = (evt) => {
    const key = evt.target.innerHTML.toLowerCase();

    this.setState((prevState) => ({
      [key]: prevState[key] + 1,
    }));
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((prev, curr) => (prev += curr), 0);
  };

  countPositiveFeedbackPercentage = () => {
    return this.countTotalFeedback() !== 0
      ? ((this.state.good / this.countTotalFeedback()) * 100).toFixed()
      : 0;
  };

  render() {
    return (
      <>
        <Section title="Please leave your feedback">
          <FeedbackOptions
            options={this.state}
            onLeaveFeedback={this.onLeaveFeedback}
            capitalize={this.capitalize}
          ></FeedbackOptions>
        </Section>
        {this.countTotalFeedback() ? (
          <Section>
            <Statistics
              options={this.state}
              total={this.countTotalFeedback}
              positivePercentage={this.countPositiveFeedbackPercentage}
              capitalize={this.capitalize}
            />
          </Section>
        ) : (
          <Notification message="No feedback given" />
        )}
      </>
    );
  }
}

export default Reviews;
