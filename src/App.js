import React, { Component } from "react";
import "./styles.css";
import Section from "./Section";

export default class App extends Component {
  state = { good: 0, neutral: 0, bad: 0 };

  add = (type) => {
    this.setState((prev) => ({ [type]: prev[type] + 1 }));
  };

  countTotal() {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  }

  countPositive() {
    const total = this.countTotal();
    if (total === 0) return 0;
    return Math.round((this.state.good / total) * 100);
  }

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotal();
    const positive = this.countPositive();

    let statisticsBlock;

    if (total === 0) {
      statisticsBlock = <p>No feedback yet</p>;
    } else {
      statisticsBlock = (
        <>
          <p>Good: {good}</p>
          <p>Neutral: {neutral}</p>
          <p>Bad: {bad}</p>
          <p>Total: {total}</p>
          <p>Positive: {positive}%</p>
        </>
      );
    }

    return (
      <>
        <Section title="Please leave feedback">
          <button className="button" onClick={() => this.add("good")}>Good</button>
          <button className="button" onClick={() => this.add("neutral")}>Neutral</button>
          <button className="button" onClick={() => this.add("bad")}>Bad</button>
        </Section>

        <Section title="Statistics">{statisticsBlock}</Section>
      </>
    );
  }
}
