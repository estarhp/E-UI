import React from 'react';
import { mount } from 'enzyme';
import {Row} from '../index';
import {Col} from '../index';

describe('Row Component', () => {
  it('renders without crashing', () => {
    mount(<Row />);
  });

  it('renders with correct gutter', () => {
    const gutter = 16;
    const wrapper = mount(<Row gutter={gutter} />);
    const rowElement = wrapper.find('.e-row').getDOMNode() as HTMLDivElement;

    expect(rowElement.style.marginLeft).toBe(`-${gutter / 2}px`);
    expect(rowElement.style.marginRight).toBe(`-${gutter / 2}px`);
  });

  it('renders with correct flex display', () => {
    const wrapper = mount(<Row flex />);
    const rowElement = wrapper.find('.e-row').getDOMNode() as HTMLDivElement;

    expect(rowElement.style.display).toBe('block');
  });

  it('renders with correct align-items', () => {
    const align = 'center';
    const wrapper = mount(<Row align={align} />);
    const rowElement = wrapper.find('.e-row').getDOMNode() as HTMLDivElement;

    expect(rowElement.style.alignItems).toBe(align);
  });

  it('renders with correct justify-content', () => {
    const justify = 'center';
    const wrapper = mount(<Row justify={justify} />);
    const rowElement = wrapper.find('.e-row').getDOMNode() as HTMLDivElement;

    expect(rowElement.style.justifyContent).toBe(justify);
  });
});

describe('Col Component', () => {
  it('renders without crashing', () => {
    mount(<Col />);
  });

  it('renders with correct offset class', () => {
    const offset = 4;
    const wrapper = mount(<Col offset={offset} />);
    expect(wrapper.find('.e-col-offset-4').exists()).toBe(true);
  });

  it('renders with correct span class', () => {
    const span = 8;
    const wrapper = mount(<Col span={span} />);
    expect(wrapper.find('.e-col-8').exists()).toBe(true);
  });
});
