import { all, call, put, takeEvery, } from 'redux-saga/effects'

import { SIGNUP_REQWEST } from '../ActionType'
import { signupAPI } from '../../common/api/auth.api'
import { authError, signupResponse } from '../action/auth.action';


function* signupUser(action) {
    console.log('aaaaaa');
    try {
        const user = yield call(signupAPI, action.payload)
        yield put({ type: signupResponse, user: user })
    } catch (e) {
        yield put(authError(e.message))
        console.log(e);
    }
}

function* watchSignup() {
    yield takeEvery(SIGNUP_REQWEST, signupUser)
}

export default function* authSaga() {
    yield all([
        watchSignup()
    ])
}


function* loginUser(action) {
    try{

    } catch(e){

    }
}

