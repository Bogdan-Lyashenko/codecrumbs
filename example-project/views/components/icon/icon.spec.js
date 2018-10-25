import React from 'react';
import { render, shallow } from 'enzyme';
import Icon from './icon';


describe('Icon', () => {
  it('should render an icon', () => {
    const wrapper = shallow(<Icon name="play" />);
    expect(wrapper.contains(<span className="material-icons">play</span>)).toBe(true);
  });

  it('should add provided props.className', () => {
    const wrapper = render(<Icon className="foo bar" name="play" />);
    const icon = wrapper.find('span');

    expect(icon.hasClass('material-icons foo bar')).toBe(true);
  });
});
