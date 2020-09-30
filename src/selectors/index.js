import { createSelector } from 'reselect'

const getFeatures = (state) => state.earthquakes.features
const getMagnitudeFilter = (state) => state.earthquakes.magFilter
const getMagTypeFilter = (state) => state.earthquakes.magTypeFilter

export const getFilteredFeatures = createSelector(
  [getFeatures, getMagnitudeFilter, getMagTypeFilter],
  (features, mag, magType) => {
    return filterByMagType(filterByMag(features, mag), magType)
  }
)

export const filterByMag = (items, mag) => {
  return mag !== '' ? items.filter((item) => Math.floor(item.properties.mag) >= parseInt(mag)) : items
}

export const filterByMagType = (items, magType) => {
  return magType !== '' ? items.filter((item) => item.properties.magType === magType.toLowerCase()) : items
}
