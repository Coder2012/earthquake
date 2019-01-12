import React, { Component } from "react";
import { ReactComponent as ResetIcon } from "../assets/icons8-cancel.svg";

class Input extends Component {
  constructor(props) {
    super(props);

    this.state = {
      term: ""
    };

    this.resetHandler = this.resetHandler.bind(this);
    this.changeHandler = this.changeHandler.bind(this);
  }

  resetHandler() {
    this.updateState();
  }

  changeHandler(event) {
    this.updateState(event.target.value);
  }

  updateState(value = "") {
    this.setState(
      prevState => {
        return { term: value };
      },
      () => {
        this.props.inputChangeHandler(value);
      }
    );
  }

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.term}
          onChange={this.changeHandler}
        />
        {this.state.term !== "" && <ResetIcon onClick={this.resetHandler} />}
      </div>
    );
  }
}
export default Input;
