export const LOAD_LIGHTS='LOAD_LIGHTS';
export const TOGGLE_LIGHT='TOGGLE_LIGHT';
export const SET_LIGHTS_STATUS='SET_LIGHTS_STATUS';

export function loadLights() {
    return {
        type: LOAD_LIGHTS
    }
}

export function setLightsStatus(lightsStatus) {
    
    return {
        type: SET_LIGHTS_STATUS,
        payload: {
            lights: lightsStatus
        }
    }
}

export function toggleLight() {
    return {
        type: TOGGLE_LIGHT
    }
}
