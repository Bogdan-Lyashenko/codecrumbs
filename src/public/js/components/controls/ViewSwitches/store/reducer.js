import { ACTIONS, CONTROLS_KEYS, VIEW_TYPES } from './constants';

const DefaultState = {
    switches: [
        {
            name: 'Source',
            key: CONTROLS_KEYS.SOURCE,
            children: [
                {
                    name: 'close all',
                    title: 'Close folders to 2nd Level',
                    key: CONTROLS_KEYS.SOURCE_COLLAPSE_TO_MIN,
                    type: VIEW_TYPES.BUTTON
                },
                {
                    name: 'open all',
                    title: 'Open all folders',
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
                    name: 'show all',
                    title: 'Show All dependencies',
                    key: CONTROLS_KEYS.DEPENDENCIES_SHOW_ALL,
                    type: VIEW_TYPES.BUTTON
                },
                {
                    name: 'direct only',
                    title: 'Show One module dependencies',
                    key: CONTROLS_KEYS.DEPENDENCIES_SHOW_ONE_MODULE
                }
            ]
        },
        {
            name: 'CodeCrumbs',
            key: CONTROLS_KEYS.CODE_CRUMBS,
            children: [
                {
                    name: 'minimize',
                    title: 'Minimize code crumbs',
                    key: CONTROLS_KEYS.CODE_CRUMBS_MINIMIZE
                },
                {
                    name: 'show details',
                    title: 'Show all Details',
                    key: CONTROLS_KEYS.CODE_CRUMBS_DETAILS
                }
            ]
        }
    ],
    checkedState: {
        [CONTROLS_KEYS.SOURCE]: true
    },
    disabledState: {
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
                disabledState: {
                    ...state.disabledState,
                    [buttonKey]: true
                }
            };

        case ACTIONS.SET_DISABLED_CONTROL:
            const { controlKey, disabled } = action.payload;

            return {
                ...state,
                disabledState: {
                    ...state.disabledState,
                    [controlKey]: disabled
                }
            };
            break;

        default:
            return state;
    }
};
