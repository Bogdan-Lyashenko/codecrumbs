import React, { Component } from 'react';
import { List } from 'immutable';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';

import { getNotification, notificationActions } from 'src/notification';
import { getTaskFilter, getVisibleTasks, tasksActions } from 'src/tasks';
import Notification from '../../components/notification';
import TaskFilters from '../../components/task-filters';
import TaskForm from '../../components/task-form';
import TaskList from '../../components/task-list';


export class TasksPage extends Component {
  static propTypes = {
    createTask: PropTypes.func.isRequired,
    dismissNotification: PropTypes.func.isRequired,
    filterTasks: PropTypes.func.isRequired,
    filterType: PropTypes.string.isRequired,
    loadTasks: PropTypes.func.isRequired,
    location: PropTypes.object.isRequired,
    notification: PropTypes.object.isRequired,
    removeTask: PropTypes.func.isRequired,
    tasks: PropTypes.instanceOf(List).isRequired,
    undeleteTask: PropTypes.func.isRequired,
    unloadTasks: PropTypes.func.isRequired,
    updateTask: PropTypes.func.isRequired
  };

  componentWillMount() {
    this.props.loadTasks();
    this.props.filterTasks(
      this.getFilterParam(this.props.location.search)
    );
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.location.search !== this.props.location.search) {
      this.props.filterTasks(
        this.getFilterParam(nextProps.location.search)
      );
    }
  }

  componentWillUnmount() {
    this.props.unloadTasks();
  }

  getFilterParam(search) {
    const params = new URLSearchParams(search);
    return params.get('filter');
  }

  renderNotification() {
    const { notification } = this.props;
    return (
      <Notification
        action={this.props.undeleteTask}
        actionLabel={notification.actionLabel}
        dismiss={this.props.dismissNotification}
        display={notification.display}
        message={notification.message}
      />
    );
  }

  render() {
    return (
      <div className="g-row">
        <div className="g-col">
          <TaskForm handleSubmit={this.props.createTask} />
        </div>

        <div className="g-col">
          <TaskFilters filter={this.props.filterType} />
          <TaskList
            removeTask={this.props.removeTask}
            tasks={this.props.tasks}
            updateTask={this.props.updateTask}
          />
        </div>

        {this.props.notification.display ? this.renderNotification() : null}
      </div>
    );
  }
}


//=====================================
//  CONNECT
//-------------------------------------

const mapStateToProps = createSelector(
  getNotification,
  getTaskFilter,
  getVisibleTasks,
  (notification, filterType, tasks) => ({
    notification,
    filterType,
    tasks
  })
);

const mapDispatchToProps = Object.assign(
  {},
  tasksActions,
  notificationActions
);

//cc:#init#2;tasks page;
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TasksPage);
