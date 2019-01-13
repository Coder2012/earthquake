import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as earthquakeActions from "../../actions/earthquakeActions";
import PropTypes from "prop-types";
import Item from "../Item/item";
import Styles from "./features.module.scss";

class featuresList extends React.Component {
  componentWillMount() {
    this.props.earthquakeActions.fetchEarthquakes();
  }

  getFilteredFeatures() {
    const features = this.props.features
      .filter(item => {
        if (this.props.magFilter !== "") {
          return (
            Math.floor(item.properties.mag) === parseInt(this.props.magFilter)
          );
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
      });

    return { features, count: features.length };
  }

  renderItem(id, properties) {
    return <Item key={id} id={id} properties={properties} />;
  }

  render() {
    const filteredFeatures = this.getFilteredFeatures();

    if (!this.props.features.length > 0) {
      return <div>Loading earthquake data...</div>;
    } else {
      return (
        <div className={Styles.features}>
          <div className={Styles.features__count}>
            {filteredFeatures.count > 0
              ? `${filteredFeatures.count} Result(s) found`
              : `None found`}
          </div>
          <div className={Styles.features__items}>{this.props.features.length && filteredFeatures.features}</div>
        </div>
      );
    }
  }
}

featuresList.propTypes = {
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
)(featuresList);
