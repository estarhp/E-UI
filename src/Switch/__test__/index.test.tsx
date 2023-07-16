import React from 'react';
import { mount } from 'enzyme';
import Switch from '../index';

describe('Switch Component', () => {
  it('renders without crashing', () => {
    const handleClick = jest.fn();
    const handleChange = jest.fn();
    mount(
      <Switch
        handleClick={handleClick}
        handleChange={handleChange}
      />
    );
  });

  it('renders with prefix and suffix', () => {
    const handleClick = jest.fn();
    const handleChange = jest.fn();
    const prefix = <span className="prefix">On</span>;
    const suffix = <span className="suffix">Off</span>;
    const wrapper = mount(
      <Switch
        handleClick={handleClick}
        handleChange={handleChange}
        prefix={prefix}
        suffix={suffix}
      />
    );

    expect(wrapper.find('.e-switch-prefix').exists()).toBe(true);
    expect(wrapper.find('.e-switch-suffix').exists()).toBe(true);
  });

  it('renders with disabled class', () => {
    const handleClick = jest.fn();
    const handleChange = jest.fn();
    const wrapper = mount(
      <Switch
        handleClick={handleClick}
        handleChange={handleChange}
        disabled
      />
    );

    expect(wrapper.find('.e-switch-disabled').exists()).toBe(true);
  });

  it('calls handleClick when clicked', () => {
    const handleClick = jest.fn();
    const handleChange = jest.fn();
    const wrapper = mount(
      <Switch
        handleClick={handleClick}
        handleChange={handleChange}
      />
    );

    wrapper.find('input[type="checkbox"]').simulate('click');
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('calls handleChange when value changes', () => {
    const handleClick = jest.fn();
    const handleChange = jest.fn();
    const wrapper = mount(
      <Switch
        handleClick={handleClick}
        handleChange={handleChange}
      />
    );

    wrapper.find('input[type="checkbox"]').simulate('change');
    expect(handleChange).toHaveBeenCalledTimes(1);
  });
});
