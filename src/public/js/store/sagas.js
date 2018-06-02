import { put, takeLatest, select } from 'redux-saga/effects';
import { ACTIONS as DATA_BUS_ACTIONS } from '../components/data-bus/store/constants';
import {
    calcFilesTreeLayoutNodes,
    openAllFolders,
    closeAllFolders
} from '../components/data-bus/store/actions';

import {
    ACTIONS as SWITCHES_ACTIONS,
    SWITCH_KEYS
} from '../components/controls/ViewSwitches/store/constants';
import { toggleSwitch } from '../components/controls/ViewSwitches/store/actions';

function* reactOnSwitchToggle(action) {
    const { switchKey, checked } = action.payload;

    if (switchKey === SWITCH_KEYS.SOURCE_EXPAND_ALL && checked) {
        yield put(openAllFolders());
        yield put(calcFilesTreeLayoutNodes());
        return;
    }

    if (switchKey === SWITCH_KEYS.SOURCE_COLLAPSE_TO_MIN && checked) {
        yield put(closeAllFolders());
        yield put(calcFilesTreeLayoutNodes());
        return;
    }

    if (switchKey === SWITCH_KEYS.CODE_CRUMBS) {
        yield put(calcFilesTreeLayoutNodes());
    }
}

function* reactOnToggledFolder(action) {
    const checkedState = yield select(state => state.viewSwitches.checkedState);
    if (checkedState[SWITCH_KEYS.SOURCE_EXPAND_ALL]) {
        yield put(toggleSwitch(SWITCH_KEYS.SOURCE_EXPAND_ALL, false));
    }
    if (checkedState[SWITCH_KEYS.SOURCE_COLLAPSE_TO_MIN]) {
        yield put(toggleSwitch(SWITCH_KEYS.SOURCE_COLLAPSE_TO_MIN, false));
    }

    yield put(calcFilesTreeLayoutNodes());
}

//TODO: think to move out from data-bus folder
export default function* rootSaga() {
    yield takeLatest(SWITCHES_ACTIONS.TOGGLE_SWITCH, reactOnSwitchToggle);
    yield takeLatest(DATA_BUS_ACTIONS.TOGGLE_FOLDER, reactOnToggledFolder);
}
