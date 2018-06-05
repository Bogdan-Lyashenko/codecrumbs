import { ACTIONS, CONTROLS_KEYS, VIEW_TYPES } from './constants';

const DefaultState = {
    switches: [
        {
            name: 'Source',
            key: CONTROLS_KEYS.SOURCE,
            children: [
                {
                    name: 'C',
                    title: 'Collapse to 2nd Level',
                    key: CONTROLS_KEYS.SOURCE_COLLAPSE_TO_MIN,
                    type: VIEW_TYPES.BUTTON
                },
                {
                    name: 'E',
                    title: 'Expand all',
                    key: CONTROLS_KEYS.SOURCE_EXPAND_ALL,
                    type: VIEW_TYPES.BUTTON
                }
            ]
        },
        {
            name: 'Dependencies',
            key: CONTROLS_KEYS.DEPENDENCIES,
            children: [
                {
                    name: 'A',
                    title: 'Show All dependencies',
                    key: CONTROLS_KEYS.DEPENDENCIES_SHOW_ALL,
                    type: VIEW_TYPES.BUTTON
                }
            ]
        },
        {
            name: 'CodeCrumbs',
            key: CONTROLS_KEYS.CODE_CRUMBS,
            children: [
                {
                    name: 'M',
                    title: 'Minimize code crumbs',
                    key: CONTROLS_KEYS.CODE_CRUMBS_MINIMIZE
                },
                {
                    name: 'D',
                    title: 'Show all Details',
                    key: CONTROLS_KEYS.CODE_CRUMBS_DETAILS
                }
            ]
        }
    ],
    checkedState: {
        [CONTROLS_KEYS.SOURCE]: true
    },
    hiddenState: {
        [CONTROLS_KEYS.SOURCE_EXPAND_ALL]: true,
        [CONTROLS_KEYS.DEPENDENCIES_SHOW_ALL]: true
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

        case ACTIONS.FIRE_BUTTON_ACTION:
            const buttonKey = action.payload;

            return {
                ...state,
                hiddenState: {
                    ...state.hiddenState,
                    [buttonKey]: true
                }
            };

        case ACTIONS.SET_HIDDEN_CONTROL:
            const { controlKey, hidden } = action.payload;

            return {
                ...state,
                hiddenState: {
                    ...state.hiddenState,
                    [controlKey]: hidden
                }
            };
            break;

        default:
            return state;
    }
};
