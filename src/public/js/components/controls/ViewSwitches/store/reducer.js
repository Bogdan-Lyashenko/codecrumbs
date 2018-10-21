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
        },
        {
          name: 'active only',
          title: 'Keep opened only folders with active files',
          key: CONTROLS_KEYS.SOURCE_KEEP_ONLY_ACTIVE_FOLDERS
        },
        {
          name: 'dim source',
          title: 'Dim source tree folders',
          key: CONTROLS_KEYS.SOURCE_DIM_FOLDERS
        }
      ]
    },
    {
      name: 'Dependencies',
      key: CONTROLS_KEYS.DEPENDENCIES,
      children: [
        {
          name: 'direct only',
          title: 'Show One module dependencies',
          key: CONTROLS_KEYS.DEPENDENCIES_SHOW_DIRECT_ONLY
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
          name: 'line numbers',
          title: 'Show crumbed line numbers',
          key: CONTROLS_KEYS.CODE_CRUMBS_LINE_NUMBERS
        }
      ]
    },
    {
      name: 'SideBar',
      key: CONTROLS_KEYS.SIDE_BAR,
      children: []
    }
  ],
  checkedState: {
    [CONTROLS_KEYS.SOURCE]: true,
    [CONTROLS_KEYS.DEPENDENCIES_SHOW_DIRECT_ONLY]: true,
    [CONTROLS_KEYS.CODE_CRUMBS_LINE_NUMBERS]: true
  },
  disabledState: {},
  selectedTabInSideBar: '0'
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

    case ACTIONS.SET_DISABLED_CONTROL:
      const { controlKey, disabled } = action.payload;

      return {
        ...state,
        disabledState: {
          ...state.disabledState,
          [controlKey]: disabled
        }
      };

    case ACTIONS.SELECT_SIDE_BAR_TAB:
      return {
        ...state,
        selectedTabInSideBar: action.payload
      };

    default:
      return state;
  }
};
