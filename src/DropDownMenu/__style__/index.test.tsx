import React from 'react';
import { shallow, mount } from 'enzyme';
import DropDown from '../DropDown';
import DropDownMenu from '../DropDownMenu';
import DropDownMenuItem from '../DropDownMenuItem';

describe('DropDownMenuItem Component', () => {
  it('renders without crashing', () => {
    shallow(<DropDownMenuItem />);
  });

  it('renders the correct children', () => {
    const wrapper = shallow(<DropDownMenuItem>Menu Item</DropDownMenuItem>);
    expect(wrapper.text()).toBe('Menu Item');
  });
});

describe('DropDownMenu Component', () => {
  it('renders without crashing', () => {
    shallow(<DropDownMenu />);
  });

  it('renders the correct children', () => {
    const wrapper = mount(
      <DropDownMenu>
        <DropDownMenuItem>Menu Item 1</DropDownMenuItem>
        <DropDownMenuItem>Menu Item 2</DropDownMenuItem>
        <DropDownMenuItem>Menu Item 3</DropDownMenuItem>
      </DropDownMenu>
    );

    expect(wrapper.find('.e-drop-down-menu-item')).toHaveLength(3);
  });
});

describe('DropDown Component', () => {
  it('renders without crashing', () => {
    shallow(<DropDown />);
  });

  it('renders the trigger and menu', () => {
    const wrapper = mount(
      <DropDown>
        <div>Trigger</div>
        <DropDownMenu>
          <DropDownMenuItem>Menu Item 1</DropDownMenuItem>
          <DropDownMenuItem>Menu Item 2</DropDownMenuItem>
          <DropDownMenuItem>Menu Item 3</DropDownMenuItem>
        </DropDownMenu>
      </DropDown>
    );

    expect(wrapper.find('.e-drop-down-trigger').text()).toBe('Trigger');
    expect(wrapper.find('.e-drop-down-menu-item')).toHaveLength(3);
  });

  it('opens and closes the menu on trigger click', () => {
    const wrapper = mount(
      <DropDown>
        <div>Trigger</div>
        <DropDownMenu>
          <DropDownMenuItem>Menu Item 1</DropDownMenuItem>
          <DropDownMenuItem>Menu Item 2</DropDownMenuItem>
          <DropDownMenuItem>Menu Item 3</DropDownMenuItem>
        </DropDownMenu>
      </DropDown>
    );

    // Initial state: menu is closed
    // @ts-ignore
    expect(wrapper.find('.e-drop-down-menu').prop('style').display).toBe('none');

    // Click on trigger to open menu
    wrapper.find('.e-drop-down-trigger').simulate('click');

    setTimeout(() => {
      // @ts-ignore
      expect(wrapper.find('.e-drop-down-menu').prop('style').display).toBe('inline-block');
    })

    // Click on trigger again to close menu
    wrapper.find('.e-drop-down-trigger').simulate('click');
    // @ts-ignore
    setTimeout(() => {
      // @ts-ignore
      expect(wrapper.find('.e-drop-down-menu').prop('style').display).toBe('none');
    })
  });
});
