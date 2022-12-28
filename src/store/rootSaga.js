import createSagaMiddleware from 'redux-saga'
import { all } from 'redux-saga/effects'

import { watchSaga as watchRedux } from '@screens/redux/state'

function* rootSaga() {
  yield all([watchRedux()])
}

export const sagaMiddleware = createSagaMiddleware()
export default rootSaga
