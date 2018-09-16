import every from 'lodash/every';
import { put, takeLatest, select, all } from 'redux-saga/effects';
import { ACTIONS as DATA_BUS_ACTIONS } from 'components/dataBus/store/constants';
import {
  calcFilesTreeLayoutNodes,
  openAllFolders,
  closeAllFolders,
  selectDependencyEdge
} from 'components/dataBus/store/actions';

import {
  ACTIONS as SWITCHES_ACTIONS,
  CONTROLS_KEYS
} from 'components/controls/ViewSwitches/store/constants';
import { setDisabledControl } from 'components/controls/ViewSwitches/store/actions';

function* reactOnSwitchToggle(action) {
  const { switchKey } = action.payload;

  if (switchKey === CONTROLS_KEYS.CODE_CRUMBS) {
    yield put(calcFilesTreeLayoutNodes());
  }

  if (switchKey === CONTROLS_KEYS.DEPENDENCIES_SHOW_DIRECT_ONLY) {
    yield put(selectDependencyEdge(null));
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

export default function* rootSaga() {
  yield all([
    takeLatest(SWITCHES_ACTIONS.TOGGLE_SWITCH, reactOnSwitchToggle),
    takeLatest(SWITCHES_ACTIONS.FIRE_BUTTON_ACTION, reactOnButtonAction),
    takeLatest(DATA_BUS_ACTIONS.TOGGLE_FOLDER, reactOnToggledFolder)
  ]);
}
