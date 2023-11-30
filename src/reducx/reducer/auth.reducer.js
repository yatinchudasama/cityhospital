import { AUTH_ERROR, SIGNUP_REQWEST, SIGNUP_RESPONSE } from "../ActionType";

export const initialValues = {
    isLoding: false,
    user: null,
    error: null,
}

export const signupReducer = (state = initialValues, action) => {
    console.log(action);

    switch (action.type) {
        case SIGNUP_REQWEST:

            return state

        case SIGNUP_RESPONSE:
            return {
                isLoding: false,
                user: action.paylod,
                error: null,
            }

            
        case AUTH_ERROR:
            return {
                isLoding: false,
                user: null,
                error: action.paylod,
            }
        default:
            return state
    }

}