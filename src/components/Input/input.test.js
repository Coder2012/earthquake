import React from "react";
import Enzyme, { shallow, mount } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import Input from "./input";
import { ReactComponent as ResetIcon } from "../../assets/icons8-cancel.svg";

Enzyme.configure({ adapter: new EnzymeAdapter() });

describe("Input test suite", () => {
  test("Input renders without error", () => {
    const wrapper = shallow(<Input />);

    const component = wrapper.find('[data-test="input"]');
    expect(component.length).toBe(1);
  });

  test("Will not render reset icon if term is empty string", () => {
    const wrapper = mount(<Input />);
    wrapper.setState({ term: ''});

    expect(wrapper.find(ResetIcon).length).toEqual(0);
  });

  test("Renders reset icon if term is not empty string", () => {
    const wrapper = mount(<Input />);
    wrapper.setState({ term: 'ml'});

    expect(wrapper.find(ResetIcon).length).toEqual(1);
  });
});
