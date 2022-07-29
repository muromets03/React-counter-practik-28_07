import React, { Component } from "react";
import CounterArticle from "../CounterArticle";
import styles from "./CounterStyle.module.css";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 1,
      isMode: true,
    };
  }

  onChangeStep = ({ target: { value } }) => {
    const step = Number(value);

    if (step < 1 || step > 1000000) {
      return;
    }
    this.setState({ step: step });
  };

  render() {
    const { step } = this.state;

    return (
      <>
        <CounterArticle step={step} />
        <article style={styles} className={styles.article}>
          <h3 style={styles} className={styles.article}>
            Step set
          </h3>
          <input
            style={styles}
            className={styles.input}
            name="step"
            type="number"
            onChange={this.onChangeStep}
            value={step}
          />
          <div style={styles} className={styles.step}>
            Step-{step}
          </div>
        </article>
      </>
    );
  }
}

export default Counter;
