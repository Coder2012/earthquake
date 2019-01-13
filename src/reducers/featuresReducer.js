import initialState from "./initialState";
import {
  FETCH_EARTHQUAKES,
  RECEIVE_EARTHQUAKES,
  FILTER_MAGNITUDE,
  FILTER_MAGNITUDE_TYPE
} from "../actions/actionTypes";

export default function earthquakes(state = initialState, { type, features, magFilter, magTypeFilter }) {
  if (!type) {
    return state;
  }

  switch (type) {
    case FETCH_EARTHQUAKES:
      return;
    case RECEIVE_EARTHQUAKES:
      return {
        ...state,
        features
      }
    case FILTER_MAGNITUDE:
      return {
        ...state,
        magFilter
      }

      case FILTER_MAGNITUDE_TYPE:
      return {
        ...state,
        magTypeFilter
      }

    default:
      return state;
  }
}
