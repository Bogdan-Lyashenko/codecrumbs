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
                {
                    name: 'M',
                    title: 'Minimize code crumbs',
                    key: SWITCH_KEYS.CODE_CRUMBS_MINIMIZE
                },
                {
                    name: 'D',
                    title: 'Show all Details',
                    key: SWITCH_KEYS.CODE_CRUMBS_DETAILS
                }
            ]
        }
    ],
    checkedState: {
        [SWITCH_KEYS.SOURCE]: true,
        [SWITCH_KEYS.DEPENDENCIES]: false,
        [SWITCH_KEYS.CODE_CRUMBS]: false,
        [SWITCH_KEYS.CODE_CRUMBS_MINIMIZE]: false,
        [SWITCH_KEYS.CODE_CRUMBS_DETAILS]: false
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
