import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useSelector, useDispatch } from 'react-redux'
import { getFilteredFeatures } from './selectors'
import { FeaturesList } from './components/FeaturesList/featuresList'
import * as earthquakeActions from './actions/earthquakeActions'
import Header from './components/Header/header'

export const App = () => {
  const dispatch = useDispatch()
  const features = useSelector(getFilteredFeatures)
  const [magFilter, setMagFilter] = useState('')
  const [magTypeFilter, setMagTypeFilter] = useState('')

  useEffect(() => {
    dispatch(earthquakeActions.fetchEarthquakes())
  }, [dispatch])

  const searchTermHandler = () => {
    dispatch(earthquakeActions.filterMagnitude(magFilter))
    dispatch(earthquakeActions.filterMagnitudeType(magTypeFilter))
  }

  return (
    <div className="App">
      <Header
        magnitudeFilterHandler={(value) => setMagFilter(value)}
        magnitudeTypeFilterHandler={(value) => setMagTypeFilter(value)}
        searchTermHandler={searchTermHandler}
      />
      <FeaturesList features={features} />
    </div>
  )
}

App.propTypes = {
  earthquakeActions: PropTypes.object,
  features: PropTypes.array,
}
