import * as actionTypes from "./actionTypes";

export function receiveEarthquakes(data) {
  const { features } = data;
  return { type: actionTypes.RECEIVE_EARTHQUAKES, features };
}

export function filterMagnitude(value) {
  return { type: actionTypes.FILTER_MAGNITUDE, magFilter: value };
}

export function filterMagnitudeType(value) {
  return { type: actionTypes.FILTER_MAGNITUDE_TYPE, magTypeFilter: value };
}

export function fetchEarthquakes() {
  return dispatch => {
    fetch(
      "https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2014-01-01&endtime=2014-01-02"
    )
      .then(response =>
        response.json().then(data => ({
          data: data,
          status: response.status
        }))
      )
      .then(response => {
        if (response.status === 200) {
          dispatch(receiveEarthquakes(response.data));
        }
      });
  };
}
