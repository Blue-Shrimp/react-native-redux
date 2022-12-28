import { call, put, takeLatest } from 'redux-saga/effects'
import { actions } from './slice'

export function* checkRedux({ payload }) {
  try {
    const res = payload
    yield put(actions.setRedux(res))
  } catch (error) {
    yield put(actions.onError(error))
  }
}

export function* watchSaga() {
  yield takeLatest(actions.checkRedux, checkRedux)
}
