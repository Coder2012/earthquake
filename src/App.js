import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import React, { Component } from "react";
import PropTypes from "prop-types";
import FeaturesList from "./components/featuresList";
import Search from "./components/search";
import * as earthquakeActions from "./actions/earthquakeActions";

class App extends Component {
  constructor() {
    super();
    this.magnitudeFilterHandler = this.magnitudeFilterHandler.bind(this);
    this.magnitudeTypeFilterHandler = this.magnitudeTypeFilterHandler.bind(this);
  }

  magnitudeFilterHandler(value) {
    console.log("magnitudeFilterHandler", value);
    this.props.earthquakeActions.filterMagnitude(value);
  }

  magnitudeTypeFilterHandler(value) {
    console.log("magnitudeTypeFilterHandler", value);
    this.props.earthquakeActions.filterMagnitudeType(value);
  }

  render() {
    return (
      <div className="App">
        <section>
          <h2>Filter by magnitude:</h2>
          <Search filterHandler={this.magnitudeFilterHandler} />
          <h2>Filter by magnitude type:</h2>
          <Search filterHandler={this.magnitudeTypeFilterHandler} />
        </section>
        <FeaturesList />
      </div>
    );
  }
}

App.propTypes = {
  earthquakeActions: PropTypes.object,
  features: PropTypes.array
};

function mapStateToProps({ earthquakes }) {
  return {
    features: earthquakes.features
  };
}

function mapDispatchToProps(dispatch) {
  return {
    earthquakeActions: bindActionCreators(earthquakeActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
