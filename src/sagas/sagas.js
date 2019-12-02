import { put, takeEvery, all, call} from 'redux-saga/effects'
import {GET_DATA, SET_DATA} from '../index.js'

const API_URL = "http://restcountries.eu/rest/v2/all";

function* helloSaga() {
    console.log('Hello Sagas!')
}

function* getData() {debugger;
    const response = yield fetch(API_URL);
    const data = yield response.json();
    yield put({type:SET_DATA, data: data});
}

function* getDataSagas() {debugger;
    yield takeEvery(GET_DATA, getData)
}

export default function* rootSaga() {debugger;
  yield all([
      helloSaga(),
      getDataSagas()
    ])
}