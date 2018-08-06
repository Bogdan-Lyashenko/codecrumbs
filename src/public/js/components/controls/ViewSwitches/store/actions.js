import { ACTIONS } from './constants';

export const toggleSwitch = (switchKey, checked) => ({
  type: ACTIONS.TOGGLE_SWITCH,
  payload: { switchKey, checked }
});

export const fireButtonAction = buttonKey => ({
  type: ACTIONS.FIRE_BUTTON_ACTION,
  payload: buttonKey
});

export const setDisabledControl = (controlKey, disabled) => ({
  type: ACTIONS.SET_DISABLED_CONTROL,
  payload: { controlKey, disabled }
});
