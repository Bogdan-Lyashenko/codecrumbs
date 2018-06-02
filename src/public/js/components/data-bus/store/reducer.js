import { ACTIONS } from './constants';

const DefaultState = {
    filesTree: null,
    filesList: null,
    dependenciesList: null,

    filesTreeLayoutNodes: null,
    closedFolders: {}
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

        case ACTIONS.SELECT_FILE:
            return {
                ...state,
                selectedCodeCrumb: null,
                selectedFile: action.payload
            };
            break;

        case ACTIONS.TOGGLE_FOLDER:
            const { closedFolders } = state;
            const folderPath = action.payload.path;

            return {
                ...state,
                closedFolders: closedFolders[folderPath]
                    ? { ...closedFolders, [folderPath]: null }
                    : { ...closedFolders, [folderPath]: action.payload }
            };
            break;

        case ACTIONS.SELECT_CODE_CRUMB:
            const { fileNode, codeCrumb } = action.payload;
            return {
                ...state,
                selectedFile: fileNode,
                selectedCodeCrumb: codeCrumb
            };
            break;

        default:
            return state;
    }
};
