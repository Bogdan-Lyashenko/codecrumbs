import { ACTIONS } from './constants';

export const setActiveNamespace = payload => ({
  type: ACTIONS.SET_ACTIVE_NAMESPACE,
  payload
});

export const setFullState = payload => ({
  type: ACTIONS.SET_FULL_STATE,
  payload
});
