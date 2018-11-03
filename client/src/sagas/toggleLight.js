import { put, call } from 'redux-saga/effects';
import axios from 'axios';

function putLightStatus(id, status) {
    console.log(status);
    let nextState = true;
    if ( status.on === true ) {
        nextState = false;
    }
    return axios({
        method: "PUT",
        url: "/light",
        data: { id: id, status: nextState }
    }).then((response) => response.data);
}

export function* toggleLight(action) {
    try {
        const lightsData = yield call(
            putLightStatus,
            action.payload.lightID,
            action.payload.lightStatus
        );
        //yield put(setLightsStatus(lightsData));
    } catch (error) {

    }
    
}

export default toggleLight;