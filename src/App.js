import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import React, { Component } from "react";
import PropTypes from "prop-types";
import FeaturesList from "./components/FeaturesList/featuresList";
import * as earthquakeActions from "./actions/earthquakeActions";
import Header from "./components/Header/header";

class App extends Component {
  constructor(props) {
    super(props);
    this.magnitudeFilterHandler = this.magnitudeFilterHandler.bind(this);
    this.magnitudeTypeFilterHandler = this.magnitudeTypeFilterHandler.bind(
      this
    );
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
        <Header magnitudeFilterHandler={this.magnitudeFilterHandler} magnitudeTypeFilterHandler={this.magnitudeTypeFilterHandler} />
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
