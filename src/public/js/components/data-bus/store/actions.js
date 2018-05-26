import { ACTIONS } from './constants';
import { getTreeLayout } from '../../../utils/treeLayout';

export const setInitialSourceData = data => ({
    type: ACTIONS.SET_INITIAL_SOURCE_DATA,
    payload: data
});

export const calcFilesTreeLayoutNodes = codeCrumbsOn => (
    dispatch,
    getState
) => {
    const state = getState();
    const { dataBus } = state;

    if (!dataBus.filesTree) return;

    return dispatch({
        type: ACTIONS.UPDATE_FILES_TREE_LAYOUT_NODES,
        payload: getTreeLayout(dataBus.filesTree, codeCrumbsOn)
    });
};
