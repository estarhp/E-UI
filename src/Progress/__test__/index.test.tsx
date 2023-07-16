import React from 'react';
import { mount } from 'enzyme';
import Progress from '../index';

describe('Progress Component', () => {
  it('renders without crashing', () => {
    mount(<Progress percentage={50} />);
  });

  it('renders with correct percentage', () => {
    const percentage = 75;
    const wrapper = mount(<Progress percentage={percentage} />);
    expect(wrapper.find('.e-progress-inner').prop('style')).toHaveProperty('width', `${percentage}%`);
  });

  it('renders with custom type class', () => {
    const type = 'success';
    const wrapper = mount(<Progress percentage={50} type={type} />);
    expect(wrapper.find('.e-progress').hasClass(`e-progress-${type}`)).toBe(true);
  });

  it('renders with text inside', () => {
    const wrapper = mount(<Progress percentage={50} textInside />);
    expect(wrapper.find('.e-progress-text').exists()).toBe(true);
  });


  it('renders with custom strokeWidth', () => {
    const strokeWidth = 0.5;
    const wrapper = mount(<Progress percentage={50} strokeWidth={strokeWidth} />);
    expect(wrapper.find('.e-progress-outer').prop('style')).toHaveProperty('height', `${strokeWidth}rem`);
  });

  it('renders with showText', () => {
    const wrapper = mount(<Progress percentage={50} showText />);
    expect(wrapper.find('.e-progress-text').exists()).toBe(true);
  });

  it('renders without showText', () => {
    const wrapper = mount(<Progress percentage={50} showText={false} />);
    expect(wrapper.find('.e-progress-text').exists()).toBe(false);
  });
});
