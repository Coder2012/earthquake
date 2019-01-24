import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as earthquakeActions from '../../actions/earthquakeActions';
import { filterByMag, filterByMagFilter } from '../../helpers/filters';
import PropTypes from 'prop-types';
import Item from '../Item/item';
import Styles from './features.module.scss';

export class FeaturesList extends React.Component {
  componentWillMount() {
    this.props.earthquakeActions.fetchEarthquakes();
  }

  getFilteredFeatures() {
    const magFiltered = filterByMag(this.props.features);
    const features = filterByMagFilter(magFiltered).map(item => {
      return this.renderItem(item.id, item.properties);
    });

    return { features, count: features.length };
  }

  renderItem(id, properties) {
    return <Item key={id} id={id} properties={properties} />;
  }

  render() {
    const filteredFeatures = this.getFilteredFeatures();
    console.log('render');

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
          <div data-test="featuresList" className={Styles.features__items}>
            {this.props.features.length && filteredFeatures.features}
          </div>
        </div>
      );
    }
  }
}

FeaturesList.propTypes = {
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
)(FeaturesList);
