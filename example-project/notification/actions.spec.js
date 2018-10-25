import { DISMISS_NOTIFICATION } from './action-types';
import { dismissNotification } from './actions';


describe('Notification actions', () => {
  describe('dismissNotification', () => {
    it('should create DISMISS_NOTIFICATION', () => {
      expect(dismissNotification()).toEqual({
        type: DISMISS_NOTIFICATION
      });
    });
  });
});
