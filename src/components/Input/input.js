import React, { Component } from 'react';
import propTypes from 'prop-types';
import { ReactComponent as ResetIcon } from '../../assets/icons8-cancel.svg';
import Styles from './input.module.scss';

class Input extends Component {
  constructor(props) {
    super(props);

    this.state = {
      term: ''
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

  updateState(value = '') {
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
      <div className={Styles.wrapper}>
        <input
          data-test="input"
          className={this.props.style}
          type="text"
          value={this.state.term}
          onChange={this.changeHandler}
        />
        {this.state.term !== '' && (
          <ResetIcon className={Styles.icon} onClick={this.resetHandler} />
        )}
      </div>
    );
  }
}

Input.propTypes = {
  inputChangeHandler: propTypes.func,
  style: propTypes.string
};

export default Input;
