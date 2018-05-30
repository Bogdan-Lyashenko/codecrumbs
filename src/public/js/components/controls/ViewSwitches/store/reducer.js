import { ACTIONS, SWITCH_KEYS } from './constants';

const DefaultState = {
    defaultChecked: SWITCH_KEYS.SOURCE,
    switches: [
        { name: 'Source', key: SWITCH_KEYS.SOURCE, checkBoxes: [] },
        { name: 'Dependencies', key: SWITCH_KEYS.DEPENDENCIES, checkBoxes: [] },
        {
            name: 'CodeCrumbs',
            key: SWITCH_KEYS.CODE_CRUMBS,
            checkBoxes: [
                { name: 'minimize', key: SWITCH_KEYS.CODE_CRUMBS_MINIMIZE }
            ]
        }
    ],
    checkedState: {
        [SWITCH_KEYS.SOURCE]: true,
        [SWITCH_KEYS.DEPENDENCIES]: false,
        [SWITCH_KEYS.CODE_CRUMBS]: false,
        [SWITCH_KEYS.CODE_CRUMBS_MINIMIZE]: false
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
