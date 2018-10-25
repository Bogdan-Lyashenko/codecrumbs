import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import Button from '../button';
import Icon from '../icon';

import './task-item.css';


export class TaskItem extends Component {
  constructor() {
    super(...arguments);

    this.state = {editing: false};

    this.edit = this.edit.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);
    this.remove = this.remove.bind(this);
    this.save = this.save.bind(this);
    this.stopEditing = this.stopEditing.bind(this);
    this.toggleStatus = this.toggleStatus.bind(this);
  }

  edit() {
    this.setState({editing: true});
  }

  handleKeyUp(event) {
    if (event.keyCode === 13) {
      this.save(event);
    }
    else if (event.keyCode === 27) {
      this.stopEditing();
    }
  }

  remove() {
    this.props.removeTask(this.props.task);
  }

  save(event) {
    if (this.state.editing) {
      const { task } = this.props;
      const title = event.target.value.trim();

      if (title.length && title !== task.title) {
        this.props.updateTask(task, {title});
      }

      this.stopEditing();
    }
  }

  stopEditing() {
    this.setState({editing: false});
  }

  toggleStatus() {
    const { task } = this.props;
    this.props.updateTask(task, {completed: !task.completed});
  }

  renderTitle(task) {
    return (
      <div className="task-item__title" tabIndex="0">
        {task.title}
      </div>
    );
  }

  renderTitleInput(task) {
    return (
      <input
        autoComplete="off"
        autoFocus
        className="task-item__input"
        defaultValue={task.title}
        maxLength="64"
        onKeyUp={this.handleKeyUp}
        type="text"
      />
    );
  }

  render() {
    const { editing } = this.state;
    const { task } = this.props;

    let containerClasses = classNames('task-item', {
      'task-item--completed': task.completed,
      'task-item--editing': editing
    });

    return (
      <div className={containerClasses} tabIndex="0">
        <div className="cell">
          <Button
            className={classNames('btn--icon', 'task-item__button', {'active': task.completed, 'hide': editing})}
            onClick={this.toggleStatus}>
            <Icon name="done" />
          </Button>
        </div>

        <div className="cell">
          {editing ? this.renderTitleInput(task) : this.renderTitle(task)}
        </div>

        <div className="cell">
          <Button
            className={classNames('btn--icon', 'task-item__button', {'hide': editing})}
            onClick={this.edit}>
            <Icon name="mode_edit" />
          </Button>
          <Button
            className={classNames('btn--icon', 'task-item__button', {'hide': !editing})}
            onClick={this.stopEditing}>
            <Icon name="clear" />
          </Button>
          <Button
            className={classNames('btn--icon', 'task-item__button', {'hide': editing})}
            onClick={this.remove}>
            <Icon name="delete" />
          </Button>
        </div>
      </div>
    );
  }
}

TaskItem.propTypes = {
  removeTask: PropTypes.func.isRequired,
  task: PropTypes.object.isRequired,
  updateTask: PropTypes.func.isRequired
};


export default TaskItem;
