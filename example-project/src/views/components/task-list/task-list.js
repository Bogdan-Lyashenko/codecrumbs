import React  from 'react';
import { List } from 'immutable';
import PropTypes from 'prop-types';
import TaskItem from '../task-item/task-item';

//cc:#layout#3;tasks list;
function TaskList({removeTask, tasks, updateTask}) {
  let taskItems = tasks.map((task, index) => {
    return (
      <TaskItem
        key={index}
        task={task}
        removeTask={removeTask}
        updateTask={updateTask}
      />
    );
  });

  return (
    <div className="task-list">
      {taskItems}
    </div>
  );
}

TaskList.propTypes = {
  removeTask: PropTypes.func.isRequired,
  tasks: PropTypes.instanceOf(List).isRequired,
  updateTask: PropTypes.func.isRequired
};

export default TaskList;
