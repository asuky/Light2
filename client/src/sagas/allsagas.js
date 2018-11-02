import { takeEvery } from 'redux-saga/effects';

import { getLights } from './getLights';
import { LOAD_LIGHTS } from '../actions/actions';

export function* allSagas() {
    yield takeEvery(LOAD_LIGHTS, getLights);
}

export default allSagas;