import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import Button from '../index';

describe('Button Component', () => {
  let wrapper: ShallowWrapper;

  beforeEach(() => {
    wrapper = shallow(<Button>Click me</Button>);
  });

  afterEach(() => {
    wrapper.unmount();
  });

  it('renders correctly', () => {
    expect(wrapper.text()).toBe('Click me');
  });

  it('handles click event', () => {
    const handleClick = jest.fn();
    wrapper.setProps({ handleClick });

    const button = wrapper.find('button');
    button.simulate('click');

    expect(handleClick).toHaveBeenCalledTimes(1);
  });


  it('applies custom className to button', () => {
    const customClassName = 'custom-class';
    wrapper.setProps({ className: customClassName });

    const button = wrapper.find('button');
    expect(button.hasClass('e-btn')).toBe(true);
    expect(button.hasClass(customClassName)).toBe(true);
  });


  it('disables button when disabled prop is true', () => {
    wrapper.setProps({ disabled: true });

    const button = wrapper.find('button');
    expect(button.prop('disabled')).toBe(true);
  });

  it('triggers handleClick when button is clicked', () => {
    const handleClick = jest.fn();
    wrapper.setProps({ handleClick });

    const button = wrapper.find('button');
    button.simulate('click');

    expect(handleClick).toHaveBeenCalledTimes(1);
  });




});
