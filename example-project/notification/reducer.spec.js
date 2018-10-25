import { REMOVE_TASK_SUCCESS } from 'src/tasks/action-types';
import { DISMISS_NOTIFICATION } from './action-types';
import { notificationReducer } from './reducer';


describe('Notification reducer', () => {
  describe('REMOVE_TASK_SUCCESS', () => {
    it('should return correct state', () => {
      let nextState = notificationReducer(undefined, {
        type: REMOVE_TASK_SUCCESS,
        task: {}
      });

      expect(nextState.actionLabel).toBe('Undo');
      expect(nextState.display).toBe(true);
      expect(nextState.message).toBe('Task deleted');
    });
  });


  describe('DISMISS_NOTIFICATION', () => {
    it('should return correct state', () => {
      let nextState = notificationReducer(undefined, {
        type: DISMISS_NOTIFICATION
      });

      expect(nextState.actionLabel).toBe('');
      expect(nextState.display).toBe(false);
      expect(nextState.message).toBe('');
    });
  });
});
