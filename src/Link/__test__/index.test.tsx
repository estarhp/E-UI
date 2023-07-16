import React from 'react';
import { mount } from 'enzyme';
import Link from '../index';

describe('Link Component', () => {
  it('renders without crashing', () => {
    mount(<Link />);
  });

  it('renders with correct href', () => {
    const href = 'https://example.com';
    const wrapper = mount(<Link href={href} />);
    expect(wrapper.find('a').prop('href')).toBe(href);
  });

  it('renders with correct className', () => {
    const className = 'custom-link';
    const wrapper = mount(<Link className={className} />);
    expect(wrapper.find('a').hasClass(className)).toBe(true);
  });

  it('renders with underline style when underline prop is true', () => {
    const wrapper = mount(<Link underline />);
    expect(wrapper.find('a').hasClass('e-link-underline')).toBe(true);
  });

  it('renders with correct type class', () => {
    const type = 'secondary';
    const wrapper = mount(<Link type={type} />);
    expect(wrapper.find('a').hasClass(`e-link-${type}`)).toBe(true);
  });

  it('renders with disabled attribute', () => {
    const wrapper = mount(<Link disabled />);
    expect(wrapper.find('a').hasClass("e-link-disabled")).toBe(true);
  });

  it('renders with correct children', () => {
    const text = 'Click me';
    const wrapper = mount(<Link>{text}</Link>);
    expect(wrapper.find('span').text()).toBe(text);
  });
});
