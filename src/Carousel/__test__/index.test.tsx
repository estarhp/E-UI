import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import Carousel, { CarouselProps } from '../index';

describe('Carousel Component', () => {
  let wrapper: ShallowWrapper<CarouselProps>;
  const testChildren = [
    <div key="1">Slide 1</div>,
    <div key="2">Slide 2</div>,
    <div key="3">Slide 3</div>,
  ];

  beforeEach(() => {
    wrapper = shallow<CarouselProps>(<Carousel>{testChildren}</Carousel>);
  });

  afterEach(() => {
    wrapper.unmount();
  });

  it('renders children correctly', () => {
    for (const child of testChildren) {
      expect(wrapper.contains(child)).toBe(true);
    }
  });

  it('triggers next slide when next control is clicked', () => {
    const nextControl = wrapper.find('.e-carousel-control').at(1);
    nextControl.simulate('click');
    expect(wrapper).toMatchSnapshot();
  });

  it('triggers previous slide when previous control is clicked', () => {
    const prevControl = wrapper.find('.e-carousel-control').at(0);
    prevControl.simulate('click');
    expect(wrapper).toMatchSnapshot();
  });

  // ... (其他测试用例)

  it('applies custom className correctly', () => {
    const testClassName = 'custom-carousel';
    wrapper.setProps({ className: testClassName });

    const carouselDiv = wrapper.find('.e-carousel');
    expect(carouselDiv.hasClass(testClassName)).toBe(true);
  });
});
