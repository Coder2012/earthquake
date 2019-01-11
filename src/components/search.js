import React, { Component } from "react";
import Button from "./button";

class Search extends Component {
  constructor(props) {
    super();
    this.state = {
      term: ""
    };
    this.inputChangeHandler = this.inputChangeHandler.bind(this);
    this.searchTermHandler = this.searchTermHandler.bind(this);
  }
  inputChangeHandler(event) {
    this.setState({ term: event.target.value });
  }
  searchTermHandler() {
    console.log("searchTermHandler");
    this.props.filterHandler(this.state.term);
  }
  render() {
    return (
      <section>
        <input type="text" value={this.state.term} onChange={this.inputChangeHandler}/>
        <Button clickHandler={this.searchTermHandler} />
      </section>
    );
  }
}

export default Search;
