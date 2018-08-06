import React from 'react';
import debounce from 'lodash.debounce';

class ResizeWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.handler = debounce(() => props.onResize());
  }

  componentDidMount() {
    window.addEventListener('resize', this.handler);
  }

  componentWillUnmount() {
    window.addEventListener('resize', this.handler);
  }

  render() {
    return null;
  }
}

export default ResizeWrapper;
