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

    this.state = {
      magFilter: "",
      magTypeFilter: ""
    };

    this.magnitudeFilterHandler = this.magnitudeFilterHandler.bind(this);
    this.magnitudeTypeFilterHandler = this.magnitudeTypeFilterHandler.bind(
      this
      );
      this.searchTermHandler = this.searchTermHandler.bind(this);
  }

  magnitudeFilterHandler(value) {
    console.log("magnitudeFilterHandler", value);
    this.setState(
      prevState => {
        return { magFilter: value };
      },
      () => {
        
      }
    );
  }

  magnitudeTypeFilterHandler(value) {
    console.log("magnitudeTypeFilterHandler", value);
    this.setState(
      prevState => {
        return { magTypeFilter: value };
      },
      () => {
        
      }
    );
  }

  searchTermHandler() {
    this.props.earthquakeActions.filterMagnitude(this.state.magFilter);
    this.props.earthquakeActions.filterMagnitudeType(this.state.magTypeFilter);
  }

  render() {
    return (
      <div className="App">
        <Header
          magnitudeFilterHandler={this.magnitudeFilterHandler}
          magnitudeTypeFilterHandler={this.magnitudeTypeFilterHandler}
          searchTermHandler={this.searchTermHandler}
        />
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
