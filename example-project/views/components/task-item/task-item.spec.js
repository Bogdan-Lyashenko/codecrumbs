import React from 'react';
import { mount } from 'enzyme';
import sinon from 'sinon';
import { Task } from 'src/tasks';
import { createTestComponent } from 'src/utils/create-test-component';
import TaskItem from './task-item';


describe('TaskItem', () => {
  let props;
  let task;


  beforeEach(() => {
    task = new Task({completed: true, title: 'test'});

    props = {
      task,
      removeTask: sinon.spy(),
      updateTask: sinon.spy()
    };
  });


  describe('component', () => {
    let taskItem;

    beforeEach(() => {
      taskItem = createTestComponent(TaskItem, props);
    });


    describe('instantiation', () => {
      it('should initialize #state.editing to be false', () => {
        expect(taskItem.state.editing).toEqual(false);
      });

      it('should initialize #props.task with a Task instance', () => {
        expect(taskItem.props.task instanceof Task).toBe(true);
      });
    });

    describe('#delete() method', () => {
      it('should call #taskActions.deleteTask', () => {
        taskItem.remove();
        expect(taskItem.props.removeTask.callCount).toEqual(1);
        expect(taskItem.props.removeTask.calledWith(taskItem.props.task)).toEqual(true);
      });
    });

    describe('#edit() method', () => {
      it('should set #state.editing to `true`', () => {
        taskItem.edit();
        expect(taskItem.state.editing).toEqual(true);
      });
    });

    describe('#stopEditing() method', () => {
      it('should set #state.editing to `false`', () => {
        taskItem.state.editing = true;
        taskItem.stopEditing();
        expect(taskItem.state.editing).toEqual(false);
      });
    });

    describe('#save() method', () => {
      it('should do nothing if not editing', () => {
        taskItem.stopEditing = sinon.spy();
        taskItem.state.editing = false;
        taskItem.save();
        expect(taskItem.stopEditing.callCount).toEqual(0);
      });

      it('should set #state.editing to `false`', () => {
        taskItem.state.editing = true;
        taskItem.save({
          target: {value: ''}
        });
        expect(taskItem.state.editing).toEqual(false);
      });

      it('should call #taskActions.updateTask', () => {
        taskItem.state.editing = true;
        taskItem.save({
          target: {value: 'foo'}
        });
        expect(taskItem.props.updateTask.callCount).toEqual(1);
        expect(taskItem.props.updateTask.args[0][0]).toEqual(task);
        expect(taskItem.props.updateTask.args[0][1].title).toEqual('foo');
      });
    });

    describe('#toggleStatus() method', () => {
      it('should call #taskActions.updateTask', () => {
        taskItem.toggleStatus({
          target: {checked: true}
        });

        expect(taskItem.props.updateTask.callCount).toEqual(1);
      });

      it('should toggle task.complete', () => {
        taskItem.toggleStatus();
        expect(taskItem.props.updateTask.args[0][1].completed).toEqual(!task.completed);
      });
    });

    describe('#handleKeyUp() method', () => {
      describe('with enter key', () => {
        it('should call #save() with event object', () => {
          taskItem.save = sinon.spy();
          taskItem.handleKeyUp({keyCode: 13});
          expect(taskItem.save.callCount).toEqual(1);
        });
      });

      describe('with escape key', () => {
        it('should set #state.editing to `false`', () => {
          taskItem.state.editing = true;
          taskItem.handleKeyUp({keyCode: 27});
          expect(taskItem.state.editing).toEqual(false);
        });
      });
    });
  });


  describe('DOM', () => {
    describe('title', () => {
      it('should be rendered as a text input field when editing', () => {
        const wrapper = mount(<TaskItem {...props} />);
        wrapper.setState({editing: true});

        const titleInput = wrapper.find('input');
        const titleText = wrapper.find('.task-item__title');

        expect(titleInput.length).toBe(1);
        expect(titleInput.get(0).value).toBe('test');
        expect(titleText.length).toBe(0);
      });

      it('should be rendered as text when not editing', () => {
        const wrapper = mount(<TaskItem {...props} />);
        wrapper.setState({editing: false});

        const titleInput = wrapper.find('input');
        const titleText = wrapper.find('.task-item__title');

        expect(titleInput.length).toBe(0);
        expect(titleText.length).toBe(1);
        expect(titleText.text()).toBe('test');
      });
    });


    it('should set `onKeyUp` of input field to be #handleKeyUp()', () => {
      const wrapper = mount(<TaskItem {...props} />);
      wrapper.setState({editing: true});

      const component = wrapper.instance();
      const input = wrapper.find('input');
      expect(input.prop('onKeyUp')).toBe(component.handleKeyUp);
    });

    it('should set `onClick` of status button to be #toggleStatus()', () => {
      const wrapper = mount(<TaskItem {...props} />);
      const component = wrapper.instance();
      const buttons = wrapper.find('Button');
      expect(buttons.at(0).prop('onClick')).toBe(component.toggleStatus);
    });

    it('should set `onClick` of edit button to be #edit()', () => {
      const wrapper = mount(<TaskItem {...props} />);
      const component = wrapper.instance();
      const buttons = wrapper.find('Button');
      expect(buttons.at(1).prop('onClick')).toBe(component.edit);
    });

    it('should set `onClick` of clear button to be #stopEditing()', () => {
      const wrapper = mount(<TaskItem {...props} />);
      const component = wrapper.instance();
      const buttons = wrapper.find('Button');
      expect(buttons.at(2).prop('onClick')).toBe(component.stopEditing);
    });

    it('should set `onClick` of delete button to be #remove()', () => {
      const wrapper = mount(<TaskItem {...props} />);
      const component = wrapper.instance();
      const buttons = wrapper.find('Button');
      expect(buttons.at(3).prop('onClick')).toBe(component.remove);
    });
  });
});
