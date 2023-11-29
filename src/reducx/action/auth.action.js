import { AUTH_ERROR, LOGIN_REQUWEST, SIGNUP_REQWEST, SIGNUP_RESPONSE } from "../ActionType"

export const signupReqwest = (data) => (dispatch) => {
    dispatch({type: SIGNUP_REQWEST, payload: data})
}

export const signupResponse = (data) => (dispatch) => {
    dispatch({type: SIGNUP_RESPONSE, payload: data})
}

export const authError = (data) => (dispatch) => {
    console.log(data);
    dispatch({type: AUTH_ERROR, payload: data})
}

export const loginReqwest = (data) => (dispatch) => {
    dispatch ({type: LOGIN_REQUWEST, payload: data})
}