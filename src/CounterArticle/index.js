import React, { Component } from "react";
import styles from "../Counter/CounterStyle.module.css";

class CounterArticle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      isMode: true,
    };
  }

  changeMode = () => {
    const { isMode } = this.state;

    this.setState({
      isMode: !isMode,
    });
  };

  changeNumber = () => {
    this.setState((state) => {
      const { isMode } = state;
      const { count } = state;
      const { step } = this.props;

      return { count: isMode ? count + step : count - step };
    });
  };

  render() {
    const { count } = this.state;

    return (
      <>
        <h2 style={styles} className={styles.article}>
          {" "}
          Counter {count}{" "}
        </h2>
        <div style={styles} className={styles.article}>
          <button
            style={styles}
            className={styles.btn}
            onClick={this.changeMode}
          >
            Change Mode
          </button>
          <button
            style={styles}
            className={styles.btn}
            onClick={this.changeNumber}
          >
            Add/Subtrc
          </button>
        </div>
      </>
    );
  }
}

export default CounterArticle;
