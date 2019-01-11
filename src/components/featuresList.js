import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as earthquakeActions from "../actions/earthquakeActions";
import PropTypes from "prop-types";
import React from "react";
import Item from "./item";

class stuffList extends React.Component {
  componentWillMount() {
    this.props.earthquakeActions.fetchEarthquakes();
  }

  renderItem(id, properties) {
    return <Item key={id} id={id} properties={properties} />;
  }

  render() {
    if (!this.props.features.length > 0) {
      return <div>Loading Stuff...</div>;
    } else {
      return (
        <div className="">
          {this.props.features.length}
          {this.props.features.length > 3 &&
            this.props.features
              .filter(item => {
                if (this.props.magFilter !== "") {
                  return Math.floor(item.properties.mag) === parseInt(this.props.magFilter);
                }
                return true;
              })
              .filter(item => {
                if (this.props.magTypeFilter !== "") {
                  return item.properties.magType === this.props.magTypeFilter;
                }
                return true;
              })
              .map(item => {
                return this.renderItem(item.id, item.properties);
              })}
        </div>
      );
    }
  }
}

stuffList.propTypes = {
  earthquakeActions: PropTypes.object,
  features: PropTypes.array,
  magFilter: PropTypes.string,
  magTypeFilter: PropTypes.string
};

function mapStateToProps({ earthquakes }) {
  return {
    features: earthquakes.features,
    magFilter: earthquakes.magFilter,
    magTypeFilter: earthquakes.magTypeFilter
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
)(stuffList);
