import every from 'lodash/every';
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

function* reactOnSwitchToggle(action) {
  const { switchKey, checked } = action.payload;

  if (switchKey === CONTROLS_KEYS.CODE_CRUMBS) {
    yield put(calcFilesTreeLayoutNodes());

    if (checked) {
      yield put(selectCodeCrumbedFlow());
    }
  }

  if (switchKey === CONTROLS_KEYS.CODE_CRUMBS_MINIMIZE) {
    yield all([
      put(setDisabledControl(CONTROLS_KEYS.CODE_CRUMBS_LINE_NUMBERS, checked)),
      put(calcFilesTreeLayoutNodes())
    ]);
  }

  if (switchKey === CONTROLS_KEYS.DEPENDENCIES && checked) {
    yield put(setDependenciesEntryPoint());
  }

  if (switchKey === CONTROLS_KEYS.DEPENDENCIES_SHOW_DIRECT_ONLY) {
    yield all([put(selectDependencyEdge(null)), put(setDependenciesEntryPoint())]);
  }
}

function* reactOnButtonAction(action) {
  const buttonKey = action.payload;

  if (buttonKey === CONTROLS_KEYS.SOURCE_EXPAND_ALL) {
    return yield all([
      put(setDisabledControl(CONTROLS_KEYS.SOURCE_COLLAPSE_TO_MIN)),
      put(openAllFolders()),
      put(calcFilesTreeLayoutNodes())
    ]);
  }

  if (buttonKey === CONTROLS_KEYS.SOURCE_COLLAPSE_TO_MIN) {
    return yield all([
      put(setDisabledControl(CONTROLS_KEYS.SOURCE_EXPAND_ALL)),
      put(closeAllFolders()),
      put(calcFilesTreeLayoutNodes())
    ]);
  }
}

function* reactOnToggledFolder(action) {
  const dataBusState = yield select(state => state.dataBus);
  const { closedFolders, firstLevelFolders } = dataBusState;

  yield all([
    put(
      setDisabledControl(
        CONTROLS_KEYS.SOURCE_EXPAND_ALL,
        every(Object.keys(closedFolders), item => !closedFolders[item])
      )
    ),

    put(
      setDisabledControl(
        CONTROLS_KEYS.SOURCE_COLLAPSE_TO_MIN,
        every(Object.keys(firstLevelFolders), item => closedFolders[item])
      )
    )
  ]);

  yield put(calcFilesTreeLayoutNodes());
}

function* reactOnSourceSet() {
  const viewSwitchesState = yield select(state => state.viewSwitches);
  if (viewSwitchesState.checkedState.dependencies) {
    yield put(setDependenciesEntryPoint());
  }

  yield put(updateFoldersByActiveChildren());

  yield put(calcFilesTreeLayoutNodes());

  if (viewSwitchesState.checkedState.codeCrumbs) {
    yield put(selectCodeCrumbedFlow());
  }
}

export default function* rootSaga() {
  yield all([
    takeLatest(SWITCHES_ACTIONS.TOGGLE_SWITCH, reactOnSwitchToggle),
    takeLatest(SWITCHES_ACTIONS.FIRE_BUTTON_ACTION, reactOnButtonAction),
    takeLatest(DATA_BUS_ACTIONS.TOGGLE_FOLDER, reactOnToggledFolder),
    takeLatest(DATA_BUS_ACTIONS.SET_INITIAL_SOURCE_DATA, reactOnSourceSet),
    takeLatest(DATA_BUS_ACTIONS.SET_CHANGED_SOURCE_DATA, reactOnSourceSet)
  ]);
}
