import { put, takeLatest } from 'redux-saga/effects';
import { ACTIONS } from './constants';
import { ACTIONS as SWITCHES_ACTIONS } from '../../controls/ViewSwitches/store/constants';
import { calcFilesTreeLayoutNodes } from './actions';

function* recalculateFilesLayout() {
    try {
        yield put(calcFilesTreeLayoutNodes());
    } catch (e) {
        yield put({type: 'ERROR'});
    }
}

//TODO: think to move out from data-bus folder
export default function* rootSaga() {
    yield takeLatest(SWITCHES_ACTIONS.TOGGLE_SWITCH, recalculateFilesLayout);
    yield takeLatest(ACTIONS.TOGGLE_FOLDER, recalculateFilesLayout);
}
