import React from 'react';
import { mount } from 'enzyme';
import Input from '../index';

describe('Input Component', () => {
  it('renders without crashing', () => {
    mount(<Input />);
  });

  it('renders with correct placeholder', () => {
    const placeholder = 'Enter your name';
    const wrapper = mount(<Input placeholder={placeholder} />);
    expect(wrapper.find('input').prop('placeholder')).toBe(placeholder);
  });

  it('renders with correct size class', () => {
    const wrapper = mount(<Input size="lg" />);
    expect(wrapper.find('.e-input-lg').exists()).toBe(true);
    expect(wrapper.find('.e-input-sm').exists()).toBe(false);
  });

  it('renders with disabled attribute', () => {
    const wrapper = mount(<Input disabled />);
    expect(wrapper.find('input').prop('disabled')).toBe(true);
  });

  it('renders with round class when round prop is true', () => {
    const wrapper = mount(<Input round />);
    expect(wrapper.find('.e-input-round').exists()).toBe(true);
  });

  it('triggers onFocus event', () => {
    const onFocusMock = jest.fn();
    const wrapper = mount(<Input handleFocus={onFocusMock} />);
    wrapper.find('input').simulate('focus');
    expect(onFocusMock).toHaveBeenCalled();
  });

  it('triggers onBlur event', () => {
    const onBlurMock = jest.fn();
    const wrapper = mount(<Input handleBlur={onBlurMock} />);
    wrapper.find('input').simulate('blur');
    expect(onBlurMock).toHaveBeenCalled();
  });

  it('triggers onChange event', () => {
    const onChangeMock = jest.fn();
    const wrapper = mount(<Input handleChange={onChangeMock} />);
    const inputValue = 'Test input';
    wrapper.find('input').simulate('change', { target: { value: inputValue } });
    expect(onChangeMock).toHaveBeenCalledWith(expect.objectContaining({ target: { value: inputValue } }));
  });
});
