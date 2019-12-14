import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import Calculator from '../Calculator/Calculator';
import renderer from 'react-test-renderer';

describe('App', () => {
  let wrapper;

  beforeEach(() => wrapper = shallow(<App />));

  it('should render correctly', () => {
    expect(wrapper.debug()).toMatchSnapshot();
  });

  it('should render a <div />', () => {
    expect(wrapper.find('div').length).toEqual(1);
  });

  it ('should render the Calculator component', () => {
    expect(wrapper.containsMatchingElement(<Calculator />)).toEqual(true);
  })
});