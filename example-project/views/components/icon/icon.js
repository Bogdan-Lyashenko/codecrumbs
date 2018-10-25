import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';


const Icon = ({className, name}) => {
  const cssClasses = classNames('material-icons', className);
  return <span className={cssClasses}>{name}</span>;
};

Icon.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string.isRequired
};


export default Icon;
