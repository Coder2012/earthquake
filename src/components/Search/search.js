import React, { Component } from 'react';
import propTypes from 'prop-types';
import Button from '../Button/button';
import Input from '../Input/input';
import Styles from './search.module.scss';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ''
    };
    this.inputChangeHandler = this.inputChangeHandler.bind(this);
    this.searchTermHandler = this.searchTermHandler.bind(this);
  }
  inputChangeHandler(value) {
    this.setState(
      prevState => {
        return { term: value };
      },
      () => {
        this.props.filterHandler(this.state.term);
      }
    );
  }
  searchTermHandler() {
    this.props.searchTermHandler(this.state.term);
  }
  render() {
    return (
      <section className={Styles.search}>
        <h3>{this.props.title}</h3>
        <div className={Styles.search__controls}>
          <Input
            style={Styles.search__input}
            inputChangeHandler={this.inputChangeHandler}
          />
          <Button
            style={Styles.search__button}
            clickHandler={this.searchTermHandler}
          />
        </div>
      </section>
    );
  }
}

Search.propTypes = {
  filterHandler: propTypes.func,
  searchTermHandler: propTypes.func,
  title: propTypes.string
};

export default Search;
