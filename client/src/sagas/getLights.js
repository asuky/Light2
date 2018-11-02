import { put, call } from 'redux-saga/effects';
import axios from 'axios';
import { setLightsStatus } from '../actions/actions';

function fetchLights() {
    return axios({
        method: "GET",
        url: "/list"
    }).then((response) => response.data);
}

export function* getLights() {
    try {
        const lightsData = yield call(fetchLights);
        yield put(setLightsStatus(lightsData));
    } catch (error) {

    }
    
}

export default getLights;