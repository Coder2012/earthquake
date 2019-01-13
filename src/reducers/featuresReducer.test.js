import featuresReducer from "./featuresReducer";
import * as actionTypes from "../actions/actionTypes";

describe("Features reducer", () => {
  test("RECEIVE_EARTHQUAKES action correctly returns state", () => {
    const initialState = { foo: "bar" };
    const features = [1, 2, 3];
    const action = { type: actionTypes.RECEIVE_EARTHQUAKES, features };
    const result = featuresReducer(initialState, action);

    expect(result).toEqual({ ...initialState, features });
  });

  test("FILTER_MAGNITUDE action correctly returns state", () => {
    const initialState = { foo: "bar" };
    const magFilter = '5';
    const action = { type: actionTypes.FILTER_MAGNITUDE, magFilter };
    const result = featuresReducer(initialState, action);

    expect(result).toEqual({ ...initialState, magFilter });
  });

  test("FILTER_MAGNITUDE_TYPE action correctly returns state", () => {
    const initialState = { foo: "bar" };
    const magTypeFilter = 'ml';
    const action = { type: actionTypes.FILTER_MAGNITUDE_TYPE, magTypeFilter };
    const result = featuresReducer(initialState, action);

    expect(result).toEqual({ ...initialState, magTypeFilter });
  });
});
