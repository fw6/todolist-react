import { takeEvery, put } from 'redux-saga/effects'
import * as types from './actionTypes'
import * as actions from './actionCreators'
import Axios from 'axios'

function* getInitList() {
  try {
    const data = yield Axios.get('api/todolist').then(res => res.data)
    yield put(actions.initListAction(data))
  } catch (e) {
    console.log('error in todosaga')
  }
}

function* mySaga() {
  yield takeEvery(types.GET_INIT_LIST, getInitList)
}

export default mySaga
