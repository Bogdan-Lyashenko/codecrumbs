import React from 'react';
import { render, shallow } from 'enzyme';
import Button from './button';


describe('Button', () => {
  it('should render a button with text node', () => {
    const wrapper = render(<Button>Foo</Button>);
    const button = wrapper.find('button');

    expect(button.length).toBe(1);
    expect(button.text()).toBe('Foo');
  });

  it('should render a button with child element', () => {
    const wrapper = shallow(<Button><span>Foo</span></Button>);
    const button = wrapper.find('button');

    expect(button.length).toBe(1);
    expect(button.contains(<span>Foo</span>)).toBe(true);
  });

  it('should set default className', () => {
    const wrapper = render(<Button />);
    const button = wrapper.find('button');

    expect(button.hasClass('btn')).toBe(true);
  });

  it('should add provided props.className', () => {
    const wrapper = render(<Button className="foo bar" />);
    const button = wrapper.find('button');

    expect(button.hasClass('btn foo bar')).toBe(true);
  });

  it('should set type=button by default', () => {
    const wrapper = render(<Button />);
    const button = wrapper.find('button');

    expect(button.attr('type')).toBe('button');
  });

  it('should set type with provided props.type', () => {
    const wrapper = render(<Button type="submit" />);
    const button = wrapper.find('button');

    expect(button.attr('type')).toBe('submit');
  });

  it('should set onClick with provided props.onClick', () => {
    const handleClick = jasmine.createSpy('handleClick');
    const wrapper = shallow(<Button onClick={handleClick} />);

    wrapper.simulate('click');

    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
