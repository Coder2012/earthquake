import React from "react";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import Button from "./button";

Enzyme.configure({ adapter: new EnzymeAdapter() });

describe("Button test suite", () => {
  test("Button renders without error", () => {
    const wrapper = shallow(<Button />);

    const component = wrapper.find('[data-test="button"]');
    expect(component.length).toBe(1);
  });
});
