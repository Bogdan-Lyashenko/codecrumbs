import { put, takeLatest, select, all } from 'redux-saga/effects';
// import { delay } from 'redux-saga';

import { ACTIONS as DATA_BUS_ACTIONS } from 'core/dataBus/constants';
import {
  calcFilesTreeLayoutNodes,
  openAllFolders,
  closeAllFolders,
  selectDependencyEdge,
  setDependenciesEntryPoint,
  selectCodeCrumbedFlow,
  updateFoldersByActiveChildren
} from 'core/dataBus/actions';
import { getNamespacesList } from 'core/dataBus/selectors';

import { ACTIONS as SWITCHES_ACTIONS, CONTROLS_KEYS } from 'core/controlsBus/constants';
import { setDisabledControl } from 'core/controlsBus/actions';
import { getCheckedState } from 'core/controlsBus/selectors';

import { setActiveNamespace } from 'core/namespaceIntegration/actions';

function* reactOnSwitchToggle(action) {
  const namespacesList = yield select(getNamespacesList);

  for (let namespace of namespacesList) {
    yield applyReactionOnSwitchToggleToNamespace({ ...action.payload, namespace });
    // yield delay(500); // TODO: check performance, uncomment if make sense
  }
}

function* applyReactionOnSwitchToggleToNamespace({ switchKey, checked, namespace }) {
  if (switchKey === CONTROLS_KEYS.SOURCE_KEEP_ONLY_ACTIVE_ITEMS) {
    if (checked) {
      yield reactByUpdatingFoldersState({ namespace });
    }
  }

  if (switchKey === CONTROLS_KEYS.CODE_CRUMBS_DIAGRAM_ON) {
    if (checked) {
      yield put(selectCodeCrumbedFlow(undefined, namespace));
    } else {
      yield reactByUpdatingFoldersState({ namespace });
    }
  }

  if (switchKey === CONTROLS_KEYS.CODE_CRUMBS_MINIMIZE) {
    yield all([
      put(setDisabledControl(CONTROLS_KEYS.CODE_CRUMBS_LINE_NUMBERS, checked)),
      put(calcFilesTreeLayoutNodes(namespace))
    ]);
  }

  if (switchKey === CONTROLS_KEYS.CODE_CRUMBS_FILTER_FLOW) {
    yield reactByUpdatingFoldersState({ namespace });
  }

  if (switchKey === CONTROLS_KEYS.DEPENDENCIES_DIAGRAM_ON) {
    if (checked) {
      yield put(setDependenciesEntryPoint(undefined, namespace));
    } else {
      yield reactByUpdatingFoldersState({ namespace });
    }
  }

  if (switchKey === CONTROLS_KEYS.DEPENDENCIES_SHOW_DIRECT_ONLY) {
    yield all([
      put(selectDependencyEdge(undefined, namespace)),
      put(setDependenciesEntryPoint(undefined, namespace))
    ]);
  }
}

function* reactOnButtonAction(action) {
  const namespacesList = yield select(getNamespacesList);

  for (let namespace of namespacesList) {
    yield applyReactionOnButtonActionToNamespace({ buttonKey: action.payload, namespace });
  }
}

function* applyReactionOnButtonActionToNamespace({ buttonKey, namespace }) {
  if (buttonKey === CONTROLS_KEYS.SOURCE_EXPAND_ALL) {
    return yield all([put(openAllFolders(namespace)), put(calcFilesTreeLayoutNodes(namespace))]);
  }

  if (buttonKey === CONTROLS_KEYS.SOURCE_COLLAPSE_TO_MIN) {
    return yield all([put(closeAllFolders(namespace)), put(calcFilesTreeLayoutNodes(namespace))]);
  }
}

function* reactOnToggledFolder({ namespace }) {
  yield put(calcFilesTreeLayoutNodes(namespace));
}

function* reactOnSourceSet({ namespace }) {
  const { dependenciesDiagramOn, codeCrumbsDiagramOn } = yield select(getCheckedState);

  yield put(setActiveNamespace(namespace));

  if (!dependenciesDiagramOn && !codeCrumbsDiagramOn) {
    yield reactByUpdatingFoldersState({ namespace });
  }

  if (dependenciesDiagramOn) {
    yield put(setDependenciesEntryPoint(undefined, namespace));
  }

  if (codeCrumbsDiagramOn) {
    yield put(selectCodeCrumbedFlow(undefined, namespace));
  }
}

function* reactByUpdatingFoldersState({ namespace }) {
  yield put(updateFoldersByActiveChildren(namespace));
  yield put(calcFilesTreeLayoutNodes(namespace));
}

function* reactOnUpdateFiles({ namespace }) {
  yield put(setDependenciesEntryPoint(undefined, namespace));
}

export default function* rootSaga() {
  yield all([
    takeLatest(SWITCHES_ACTIONS.TOGGLE_SWITCH, reactOnSwitchToggle),
    takeLatest(SWITCHES_ACTIONS.FIRE_BUTTON_ACTION, reactOnButtonAction),
    takeLatest(DATA_BUS_ACTIONS.TOGGLE_FOLDER, reactOnToggledFolder),
    takeLatest(DATA_BUS_ACTIONS.SET_INITIAL_SOURCE_DATA, reactOnSourceSet),
    takeLatest(DATA_BUS_ACTIONS.SET_CHANGED_SOURCE_DATA, reactOnSourceSet),
    takeLatest(DATA_BUS_ACTIONS.SET_DEPENDENCIES_ENTRY_POINT, reactByUpdatingFoldersState),
    takeLatest(DATA_BUS_ACTIONS.SELECT_CODE_CRUMBED_FLOW, reactByUpdatingFoldersState),
    takeLatest(DATA_BUS_ACTIONS.UPDATE_FILES, reactOnUpdateFiles)
  ]);
}
