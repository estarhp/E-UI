import React from 'react';
import { mount } from 'enzyme';
import Upload from '../index';

describe('Upload Component', () => {
  it('renders without crashing', () => {
    const handleResult = jest.fn();
    const wrapper = mount(
      <Upload action="http://8.130.101.163:8000/api/noVerifyUpload" handleResult={handleResult} />
    );

    expect(wrapper.exists()).toBe(true);
  });


});
