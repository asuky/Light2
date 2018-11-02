import {
    SET_LIGHTS_STATUS
} from '../actions/actions';

const initialState = {
    lightsData: {}
};

export function LightButton (state = initialState, action) {
    
    switch (action.type) {
        case SET_LIGHTS_STATUS:
            return Object.assign({}, state, {
                lightsData: action.payload.lights
            });
        default:
            return state;
    }
}