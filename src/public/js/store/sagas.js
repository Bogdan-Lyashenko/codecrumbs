import { put, takeLatest, select, all } from 'redux-saga/effects';
import { ACTIONS as DATA_BUS_ACTIONS } from 'components/dataBus/store/constants';
import {
  calcFilesTreeLayoutNodes,
  openAllFolders,
  closeAllFolders,
  selectDependencyEdge,
  setDependenciesEntryPoint,
  selectCodeCrumbedFlow,
  updateFoldersByActiveChildren
} from 'components/dataBus/store/actions';

import {
  ACTIONS as SWITCHES_ACTIONS,
  CONTROLS_KEYS
} from 'components/controls/ViewSwitches/store/constants';
import { setDisabledControl } from 'components/controls/ViewSwitches/store/actions';
import { getCheckedState } from 'components/controls/ViewSwitches/store/selectors';

function* reactOnSwitchToggle(action) {
  const { switchKey, checked } = action.payload;

  if (switchKey === CONTROLS_KEYS.SOURCE_KEEP_ONLY_ACTIVE_ITEMS) {
    if (checked) {
      yield reactByUpdatingFoldersState();
    }
  }

  if (switchKey === CONTROLS_KEYS.CODE_CRUMBS_DIAGRAM_ON) {
    if (checked) {
      yield put(selectCodeCrumbedFlow());
    } else {
      yield reactByUpdatingFoldersState();
    }
  }

  if (switchKey === CONTROLS_KEYS.CODE_CRUMBS_MINIMIZE) {
    yield all([
      put(setDisabledControl(CONTROLS_KEYS.CODE_CRUMBS_LINE_NUMBERS, checked)),
      put(calcFilesTreeLayoutNodes())
    ]);
  }

  if (switchKey === CONTROLS_KEYS.CODE_CRUMBS_FILTER_FLOW) {
    yield reactByUpdatingFoldersState();
  }

  if (switchKey === CONTROLS_KEYS.DEPENDENCIES_DIAGRAM_ON) {
    if (checked) {
      yield put(setDependenciesEntryPoint());
    } else {
      yield reactByUpdatingFoldersState();
    }
  }

  if (switchKey === CONTROLS_KEYS.DEPENDENCIES_SHOW_DIRECT_ONLY) {
    yield all([put(selectDependencyEdge(null)), put(setDependenciesEntryPoint())]);
  }
}

function* reactOnButtonAction(action) {
  const buttonKey = action.payload;

  if (buttonKey === CONTROLS_KEYS.SOURCE_EXPAND_ALL) {
    return yield all([put(openAllFolders()), put(calcFilesTreeLayoutNodes())]);
  }

  if (buttonKey === CONTROLS_KEYS.SOURCE_COLLAPSE_TO_MIN) {
    return yield all([put(closeAllFolders()), put(calcFilesTreeLayoutNodes())]);
  }
}

function* reactOnToggledFolder() {
  yield put(calcFilesTreeLayoutNodes());
}

function* reactOnSourceSet() {
  const { dependenciesDiagramOn, codeCrumbsDiagramOn } = yield select(getCheckedState);

  if (!dependenciesDiagramOn && !codeCrumbsDiagramOn) {
    yield reactByUpdatingFoldersState();
  }

  if (dependenciesDiagramOn) {
    yield put(setDependenciesEntryPoint());
  }

  if (codeCrumbsDiagramOn) {
    yield put(selectCodeCrumbedFlow());
  }
}

function* reactByUpdatingFoldersState() {
  yield put(updateFoldersByActiveChildren());
  yield put(calcFilesTreeLayoutNodes());
}

function* reactOnSelectNode() {
  yield put(setDependenciesEntryPoint());
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
    takeLatest(DATA_BUS_ACTIONS.SELECT_NODE, reactOnSelectNode)
  ]);
}
