import { ACTIONS, SWITCH_KEYS, VIEW_TYPES } from './constants';

const DefaultState = {
    switches: [
        {
            name: 'Source',
            key: SWITCH_KEYS.SOURCE,
            checkBoxes: [
                {
                    name: 'C',
                    title: 'Collapse to 2nd Level',
                    key: SWITCH_KEYS.SOURCE_COLLAPSE_TO_MIN,
                    type: VIEW_TYPES.BUTTON
                },
                {
                    name: 'E',
                    title: 'Expand all',
                    key: SWITCH_KEYS.SOURCE_EXPAND_ALL,
                    type: VIEW_TYPES.BUTTON
                }
            ]
        },
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
        [SWITCH_KEYS.SOURCE]: true
    }
};

export default (state = DefaultState, action) => {
    switch (action.type) {
        case ACTIONS.TOGGLE_SWITCH:
            const { switchKey, checked } = action.payload;

            const checkedState = {
                ...state.checkedState,
                [switchKey]: checked
            };

            if (switchKey === SWITCH_KEYS.SOURCE_COLLAPSE_TO_MIN && checked) {
                checkedState[SWITCH_KEYS.SOURCE_EXPAND_ALL] = false;
            }

            if (switchKey === SWITCH_KEYS.SOURCE_EXPAND_ALL && checked) {
                checkedState[SWITCH_KEYS.SOURCE_COLLAPSE_TO_MIN] = false;
            }

            return {
                ...state,
                checkedState
            };
            break;

        default:
            return state;
    }
};
