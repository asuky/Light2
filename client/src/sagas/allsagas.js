import { takeEvery } from 'redux-saga/effects';

import { getLights } from './getLights';
import { toggleLight } from './toggleLight';
import { LOAD_LIGHTS, TOGGLE_LIGHT } from '../actions/actions';

export function* allSagas() {
    yield takeEvery(LOAD_LIGHTS, getLights);
    yield takeEvery(TOGGLE_LIGHT, toggleLight);
}

export default allSagas;