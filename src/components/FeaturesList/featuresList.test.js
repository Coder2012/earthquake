import React from 'react'
import Enzyme, { mount } from 'enzyme'
import EnzymeAdapter from 'enzyme-adapter-react-16'
import features from '../../mocks/features'
import { FeaturesList } from './featuresList'
import { Item } from '../Item'

Enzyme.configure({ adapter: new EnzymeAdapter() })

describe('FeaturesList test suite', () => {
  test('It should render 3 items', () => {
    const wrapper = mount(<FeaturesList features={features} />)
    expect(wrapper.find(Item).length).toBe(3)
  })
})
