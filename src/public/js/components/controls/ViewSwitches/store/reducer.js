import { ACTIONS, SWITCH_KEYS } from './constants';

const DefaultState = {
    defaultChecked: SWITCH_KEYS.SOURCE,
    switches: [
        { name: 'Source', key: SWITCH_KEYS.SOURCE },
        { name: 'Dependencies', key: SWITCH_KEYS.DEPENDENCIES },
        { name: 'CodeCrumbs', key: SWITCH_KEYS.CODE_CRUMBS }
    ],
    checkedState: {
        [SWITCH_KEYS.SOURCE]: true,
        [SWITCH_KEYS.DEPENDENCIES]: false,
        [SWITCH_KEYS.CODE_CRUMBS]: false
    }
};

export default (state = DefaultState, action) => {
    switch (action.type) {
        case ACTIONS.TOGGLE_SWITCH:
            const { switchKey, checked } = action.payload;

            return {
                ...state,
                checkedState: {
                    ...state.checkedState,
                    [switchKey]: checked
                }
            };
            break;

        default:
            return state;
    }
};
