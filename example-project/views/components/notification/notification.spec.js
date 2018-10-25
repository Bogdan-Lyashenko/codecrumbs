import React from 'react';
import { render, shallow } from 'enzyme';
import sinon from 'sinon';
import { createTestComponent } from 'src/utils/create-test-component';
import Notification from './notification';


describe('Notification', () => {
  let props;

  beforeEach(() => {
    props = {
      action: sinon.spy(),
      actionLabel: 'actionLabel',
      dismiss: sinon.spy(),
      display: true,
      message: 'message'
    };
  });


  describe('component', () => {
    let notification;

    afterEach(() => {
      // cleanup setTimeout
      notification.clearTimer();
    });


    describe('mounting', () => {
      it('should invoke `startTimer()`', () => {
        sinon.spy(Notification.prototype, 'startTimer');
        notification = createTestComponent(Notification, props);

        expect(notification.startTimer.callCount).toBe(1);

        Notification.prototype.startTimer.restore();
      });
    });


    describe('unmounting', () => {
      it('should invoke `clearTimer()`', () => {
        notification = createTestComponent(Notification, props);
        sinon.spy(notification, 'clearTimer');
        notification.componentWillUnmount();

        expect(notification.clearTimer.callCount).toBe(1);
      });
    });


    describe('receiving new props', () => {
      it('should re-start the timer if props.display === true', () => {
        notification = createTestComponent(Notification, props);
        sinon.spy(notification, 'startTimer');
        notification.componentWillReceiveProps({display: true});

        expect(notification.startTimer.callCount).toBe(1);
      });

      it('should NOT re-start the timer if props.display === false', () => {
        notification = createTestComponent(Notification, props);
        sinon.spy(notification, 'startTimer');
        notification.componentWillReceiveProps({display: false});

        expect(notification.startTimer.callCount).toBe(0);
      });
    });


    describe('starting the timer', () => {
      it('should invoke `clearTimer()`', () => {
        notification = createTestComponent(Notification, props);
        sinon.spy(notification, 'clearTimer');
        notification.startTimer();

        expect(notification.clearTimer.callCount).toBe(1);
      });

      it('should clear pre-existing timer (if any)', () => {
        notification = createTestComponent(Notification, props);

        expect(notification.timerId).toBeDefined();

        let timerId = notification.timerId;
        notification.startTimer();

        expect(notification.timerId).not.toBe(timerId);
      });
    });


    describe('expired timer', () => {
      it('should invoke `props.dismiss()`', done => {
        props.duration = 10;
        notification = createTestComponent(Notification, props);

        setTimeout(() => {
          expect(notification.props.dismiss.callCount).toBe(1);
          done();
        }, 10);
      });
    });
  });


  describe('DOM', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = render(<Notification {...props} />);
    });

    describe('message', () => {
      it('should display `props.message`', () => {
        const wrapper = render(<Notification {...props} />);
        const message = wrapper.find('.notification__message');
        expect(message.length).toBe(1);
        expect(message.text()).toBe(props.message);
      });
    });

    describe('button', () => {
      it('should be labeled with `props.actionLabel`', () => {
        const wrapper = render(<Notification {...props} />);
        const button = wrapper.find('.notification__button');
        expect(button.length).toBe(1);
        expect(button.text()).toBe(props.actionLabel);
      });

      it('should set onClick handler with `props.action`', () => {
        const wrapper = shallow(<Notification {...props} />);
        const button = wrapper.find('.notification__button');
        expect(button.prop('onClick')).toBe(props.action);
      });
    });
  });
});
