import React from 'react';
import { mount } from 'enzyme';
import {MessageBox} from "../index";

describe('MessageBox Component', () => {
  it('renders without crashing', () => {
    mount(<MessageBox message="Test Message" />);
  });

  it('renders with correct message content', () => {
    const messageContent = 'This is a test message';
    const wrapper = mount(<MessageBox message={messageContent} />);
    expect(wrapper.text()).toContain(messageContent);
  });

  it('renders with custom className', () => {
    const className = 'custom-message';
    const wrapper = mount(<MessageBox message="Test Message" className={className} />);
    expect(wrapper.find('.e-message').hasClass(className)).toBe(true);
  });

  it('renders with correct type class', () => {
    const type = 'success';
    const wrapper = mount(<MessageBox message="Test Message" type={type} />);
    expect(wrapper.find('.e-message-success').exists()).toBe(true);
  });

});
