import React, { Component } from "react";
import Button from "./button";
import Input from './input';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ""
    };
    this.inputChangeHandler = this.inputChangeHandler.bind(this);
    this.searchTermHandler = this.searchTermHandler.bind(this);
  }
  inputChangeHandler(value) {
    this.setState({ term: value });
  }
  searchTermHandler() {
    this.props.filterHandler(this.state.term);
  }
  render() {
    return (
      <section>
        <h2>{this.props.title}</h2>
        <Input inputChangeHandler={this.inputChangeHandler}/>
        <Button clickHandler={this.searchTermHandler} />
      </section>
    );
  }
}

export default Search;
