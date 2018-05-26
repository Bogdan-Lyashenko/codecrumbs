import { ACTIONS } from './constants';

const DefaultState = {
    filesTree: null,
    filesList: null,
    dependenciesList: null,

    filesTreeLayoutNodes: null
};

export default (state = DefaultState, action) => {
    switch (action.type) {
        case ACTIONS.SET_INITIAL_SOURCE_DATA:
            return {
                ...state,
                ...action.payload
            };
            break;

        case ACTIONS.UPDATE_FILES_TREE_LAYOUT_NODES:
            return {
                ...state,
                filesTreeLayoutNodes: action.payload
            };
            break;

        default:
            return state;
    }
};
