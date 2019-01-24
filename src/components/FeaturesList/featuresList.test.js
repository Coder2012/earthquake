import React from 'react';
import Enzyme, { mount } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import features from '../../mocks/features';
import { FeaturesList } from './featuresList';
import Item from '../Item/item';

Enzyme.configure({ adapter: new EnzymeAdapter() });

describe('FeaturesList test suite', () => {
  const earthquakeActions = {
    fetchEarthquakes: jest.fn()
  };

  test('It should render 3 items', () => {
    const defaultProps = {
      earthquakeActions: earthquakeActions,
      features: features
    };

    const itemCount = defaultProps.features.length;

    const wrapper = mount(<FeaturesList {...defaultProps} />);
    expect(wrapper.find(Item).length).toBe(itemCount);
  });
});
