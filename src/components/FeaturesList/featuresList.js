import React from 'react'
import PropTypes from 'prop-types'

import { Item } from '../Item'
import Styles from './features.module.scss'

export const FeaturesList = ({ features }) => {
  const renderItem = (id, properties) => {
    return <Item key={id} id={id} properties={properties} />
  }

  if (!features.length > 0) {
    return <div>Loading earthquake data...</div>
  } else {
    return (
      <div className={Styles.features}>
        <div className={Styles.features__count}>
          {features.length > 0 ? `${features.length} Result(s) found` : `None found`}
        </div>
        <div data-test="featuresList" className={Styles.features__items}>
          {features.map((item) => renderItem(item.id, item.properties))}
        </div>
      </div>
    )
  }
}

FeaturesList.propTypes = {
  earthquakeActions: PropTypes.object,
  features: PropTypes.array,
  magFilter: PropTypes.string,
  magTypeFilter: PropTypes.string,
}
