import React from 'react';
import { mount } from 'enzyme';
import Textarea from '../index';

describe('Textarea Component', () => {
  it('renders without crashing', () => {
    const handleChange = jest.fn();
    const handleBlur = jest.fn();
    const handleFocus = jest.fn();
    mount(
      <Textarea
        handleChange={handleChange}
        handleBlur={handleBlur}
        handleFocus={handleFocus}
      />
    );
  });

  it('renders with placeholder', () => {
    const handleChange = jest.fn();
    const handleBlur = jest.fn();
    const handleFocus = jest.fn();
    const placeholder = 'Enter text...';
    const wrapper = mount(
      <Textarea
        handleChange={handleChange}
        handleBlur={handleBlur}
        handleFocus={handleFocus}
        placeholder={placeholder}
      />
    );

    expect(wrapper.find('textarea').prop('placeholder')).toBe(placeholder);
  });

  it('renders with specified rows and cols', () => {
    const handleChange = jest.fn();
    const handleBlur = jest.fn();
    const handleFocus = jest.fn();
    const rows = 8;
    const cols = 50;
    const wrapper = mount(
      <Textarea
        handleChange={handleChange}
        handleBlur={handleBlur}
        handleFocus={handleFocus}
        rows={rows}
        cols={cols}
      />
    );

    expect(wrapper.find('textarea').prop('rows')).toBe(rows);
    expect(wrapper.find('textarea').prop('cols')).toBe(cols);
  });

  it('renders with autosize class', () => {
    const handleChange = jest.fn();
    const handleBlur = jest.fn();
    const handleFocus = jest.fn();
    const wrapper = mount(
      <Textarea
        handleChange={handleChange}
        handleBlur={handleBlur}
        handleFocus={handleFocus}
        autosize
      />
    );

    expect(wrapper.find('.e-textarea-autosize').exists()).toBe(true);
  });

  it('renders with disabled class', () => {
    const handleChange = jest.fn();
    const handleBlur = jest.fn();
    const handleFocus = jest.fn();
    const wrapper = mount(
      <Textarea
        handleChange={handleChange}
        handleBlur={handleBlur}
        handleFocus={handleFocus}
        disabled
      />
    );

    expect(wrapper.find('.e-textarea-disabled').exists()).toBe(true);
  });

  it('calls handleChange when value changes', () => {
    const handleChange = jest.fn();
    const handleBlur = jest.fn();
    const handleFocus = jest.fn();
    const wrapper = mount(
      <Textarea
        handleChange={handleChange}
        handleBlur={handleBlur}
        handleFocus={handleFocus}
      />
    );

    wrapper.find('textarea').simulate('change', { target: { value: 'Test text' } });
    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(handleChange).toHaveBeenCalledWith(expect.objectContaining({ target: { value: 'Test text' } }));
  });

  it('calls handleBlur when textarea loses focus', () => {
    const handleChange = jest.fn();
    const handleBlur = jest.fn();
    const handleFocus = jest.fn();
    const wrapper = mount(
      <Textarea
        handleChange={handleChange}
        handleBlur={handleBlur}
        handleFocus={handleFocus}
      />
    );

    wrapper.find('textarea').simulate('blur');
    expect(handleBlur).toHaveBeenCalledTimes(1);
  });

  it('calls handleFocus when textarea is focused', () => {
    const handleChange = jest.fn();
    const handleBlur = jest.fn();
    const handleFocus = jest.fn();
    const wrapper = mount(
      <Textarea
        handleChange={handleChange}
        handleBlur={handleBlur}
        handleFocus={handleFocus}
      />
    );

    wrapper.find('textarea').simulate('focus');
    expect(handleFocus).toHaveBeenCalledTimes(1);
  });
});
