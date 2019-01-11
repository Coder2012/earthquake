import * as allActions from "./allActions";

export function receiveEarthquakes(data) {
  console.log("reducer", data.features.length);
  const { features } = data;
  return { type: allActions.RECEIVE_EARTHQUAKES, features };
}

export function filterMagnitude(value) {
  return { type: allActions.FILTER_MAGNITUDE, magFilter: value };
}

export function filterMagnitudeType(value) {
  return { type: allActions.FILTER_MAGNITUDE_TYPE, magTypeFilter: value };
}

export function fetchEarthquakes() {
  console.log("fetching data");
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
