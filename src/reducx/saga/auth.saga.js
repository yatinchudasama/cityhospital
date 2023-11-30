import { all, call, put, takeEvery, } from 'redux-saga/effects'

import { SIGNUP_REQWEST } from '../ActionType'
import { signupAPI } from '../../common/api/auth.api'
import { authError, signupResponse } from '../action/auth.action';
import { setAlert } from '../../slice/alert.slice';


function* signupUser(action) {
    console.log('aaaaaa');
    try {
        const user = yield call(signupAPI, action.payload)

        console.log(user);
        yield put({ type: signupResponse, user: user })
        yield put (setAlert({text: user.massege, color: 'success'}))
    } catch (e) {
        console.log(e);

        yield put(authError(e.message))
        yield put (setAlert({text: e.message, color: 'error'}))
        
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

