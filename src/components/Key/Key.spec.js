import React from 'react';
import { shallow } from 'enzyme';
import Key from './Key';
import renderer from 'react-test-renderer';

describe('Key', () => {
  let wrapper;
  
  beforeEach(() => {
    wrapper = shallow(
      <Key
        keyAction={jest.fn()}
        keyType={''}
        keyValue={''}
      />
    );
  });

  it('should render correctly', () => {
    expect(wrapper.debug()).toMatchSnapshot();
  });

  it('should render a <div />', () => {
    expect(wrapper.find('div').length).toEqual(1);
  });

  it('should render the value of keyValue', () => {
    wrapper.setProps({keyValue: '0'});
    expect(wrapper.text()).toEqual('0');
  });
});