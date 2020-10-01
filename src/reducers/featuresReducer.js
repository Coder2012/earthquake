import { createReducer } from '../utils/redux'
import initialState from '../store/initialState'
import { FETCH_EARTHQUAKES, RECEIVE_EARTHQUAKES, FILTER_MAGNITUDE, FILTER_MAGNITUDE_TYPE } from '../actions/actionTypes'

export const earthquakes = createReducer(initialState, {
  [FETCH_EARTHQUAKES]: (state) => state,
  [RECEIVE_EARTHQUAKES]: (state, { features }) => ({ ...state, features }),
  [FILTER_MAGNITUDE]: (state, { magFilter }) => ({ ...state, magFilter }),
  [FILTER_MAGNITUDE_TYPE]: (state, { magTypeFilter }) => ({ ...state, magTypeFilter }),
})
