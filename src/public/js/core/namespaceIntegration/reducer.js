import { ACTIONS } from './constants';

const DefaultState = {
  activeNamespace: undefined
};

export default (state = DefaultState, action) => {
  switch (action.type) {
    case ACTIONS.SET_ACTIVE_NAMESPACE:
      return {
        ...state,
        activeNamespace: action.payload
      };

    default:
      return state;
  }
};
