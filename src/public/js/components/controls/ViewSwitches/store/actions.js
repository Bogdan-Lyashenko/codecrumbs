import { ACTIONS } from './constants';

export const toggleSwitch = (switchKey, checked) => ({
    type: ACTIONS.TOGGLE_SWITCH,
    payload: { switchKey, checked }
});
