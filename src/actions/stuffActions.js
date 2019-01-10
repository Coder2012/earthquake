import * as allActions from "./allActions";

export function receiveStuff(data) {
  return { type: allActions.RECEIVE_STUFF, stuff: data };
}

export function receiveEarthquakes(data) {
    return { type: allActions.RECEIVE_EARTHQUAKES, stuff: data.features };
  }

export function fetchStuff() {
  return dispatch => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response =>
        response.json().then(data => ({
          data: data,
          status: response.status
        }))
      )
      .then(response => {
        if (response.status === 200) {
          dispatch(receiveStuff(response.data));
        } else {
          var flash = {
            type: "error",
            title: "Error getting task list",
            content:
              "There was an error getting the task list. Please try again."
          };
          dispatch({ type: "DISPLAY_FLASH", data: flash });
        }
      });
  };
}

export function fetchEarthquakes() {
    console.log('fetching data')
  return dispatch => {
    fetch(
      "https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2014-01-01&endtime=2014-01-02"
    ).then(response => 
        response.json().then(data => ({
            data: data,
            status: response.status
        }))
    )
    .then(response => {
        if(response.status === 200) {
            dispatch(receiveEarthquakes(response.data));
        }
    });
  };
}
