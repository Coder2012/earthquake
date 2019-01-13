import React from "react";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import * as actionTypes from "./actionTypes";
import {
  receiveEarthquakes,
  filterMagnitude,
  filterMagnitudeType
} from "./earthquakeActions";

Enzyme.configure({ adapter: new EnzymeAdapter() });

describe("EarthquakeActions test suite", () => {
  test("returns an action with type `FILTER_MAGNITUDE`", () => {
    const action = filterMagnitude();
    expect(action).toEqual({ type: actionTypes.FILTER_MAGNITUDE });
  });

  test("returns an action with type `FILTER_MAGNITUDE` with supplied magFilter value", () => {
    const magFilter = '5';
    const action = filterMagnitude(magFilter);
    expect(action).toEqual({ type: actionTypes.FILTER_MAGNITUDE, magFilter });
  });

  test("returns an action with type `FILTER_MAGNITUDE_TYPE`", () => {
    const action = filterMagnitudeType();
    expect(action).toEqual({ type: actionTypes.FILTER_MAGNITUDE_TYPE });
  });

  test("returns an action with type `FILTER_MAGNITUDE_TYPE` with supplied magTypeFilter", () => {
    const magTypeFilter = 'ml';
    const action = filterMagnitudeType(magTypeFilter);
    expect(action).toEqual({ type: actionTypes.FILTER_MAGNITUDE_TYPE, magTypeFilter });
  });
});
