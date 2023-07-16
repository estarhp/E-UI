import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import Badge from '../index';

describe('Badge Component', () => {
  let wrapper: ShallowWrapper;
  const testChild = <span>Test</span>;
  const testBadge = 'New';
  const testType = 'success';
  const testClassName = 'custom-class';

  beforeEach(() => {
    wrapper = shallow(<Badge>{testChild}</Badge>);
  });

  afterEach(() => {
    wrapper.unmount();
  });

  it('renders children correctly', () => {
    expect(wrapper.contains(testChild)).toBe(true);
  });

  it('renders badge text correctly', () => {
    wrapper.setProps({ badge: testBadge });

    const badgeSup = wrapper.find('sup');
    expect(badgeSup.text()).toBe(testBadge);
  });

  it('applies default type "danger" correctly', () => {
    const defaultTypeClass = 'e-badge-danger';
    const badgeSup = wrapper.find('.e-badge');

    expect(badgeSup.hasClass(defaultTypeClass)).toBe(true);
  });

  it('applies custom type correctly', () => {
    wrapper.setProps({ type: testType });
    const customTypeClass = `e-badge-${testType}`;
    const badgeSup = wrapper.find('.e-badge');

    expect(badgeSup.hasClass(customTypeClass)).toBe(true);
  });

  it('applies custom className correctly', () => {
    wrapper.setProps({ className: testClassName });
    const badgeDiv = wrapper.find('.e-badge');

    expect(badgeDiv.hasClass(testClassName)).toBe(true);
  });

  it('applies "e-badge-no-text" class when badge is not provided', () => {
    const noTextClass = 'e-badge-no-text';
    wrapper.setProps({ badge: undefined });
    const badgeDiv = wrapper.find('.e-badge');

    expect(badgeDiv.hasClass(noTextClass)).toBe(true);
  });
});
