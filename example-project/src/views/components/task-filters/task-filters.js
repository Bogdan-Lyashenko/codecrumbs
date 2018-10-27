import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import './task-filters.css';


const TaskFilters = ({filter}) => (
  <ul className="task-filters">
    <li><NavLink isActive={() => !filter} to="/">View All</NavLink></li>
    <li><NavLink isActive={() => filter === 'active'} to={{pathname: '/', search: '?filter=active'}}>Active</NavLink></li>
    <li><NavLink isActive={() => filter === 'completed'} to={{pathname: '/', search: '?filter=completed'}}>Completed</NavLink></li>
  </ul>
);

TaskFilters.propTypes = {
  filter: PropTypes.string
};


export default TaskFilters;
