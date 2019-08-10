import { ACTIONS } from './constants';
import { gatherFlowStepsData } from './utils/sharedCcFlows';
import { getCodeCrumbsUserChoice, getNamespacesList } from '../dataBus/selectors';
import { getActiveNamespace } from './selectors';

export const setActiveNamespace = payload => ({
  type: ACTIONS.SET_ACTIVE_NAMESPACE,
  payload
});

export const calcSharedFlowStepsData = () => (dispatch, getState) => {
  const state = getState();

  const namespace = getActiveNamespace(state);
  const namespacesList = getNamespacesList(state);
  const { selectedCrumbedFlowKey: currentSelectedCrumbedFlowKey } = getCodeCrumbsUserChoice(state, {
    namespace
  });

  dispatch({
    type: ACTIONS.CALC_SHARED_FLOW_STEPS_DATA,
    payload: gatherFlowStepsData(state, {
      currentSelectedCrumbedFlowKey,
      namespacesList
    })
  });
};

export const setFullState = payload => ({
  type: ACTIONS.SET_FULL_STATE,
  payload
});
