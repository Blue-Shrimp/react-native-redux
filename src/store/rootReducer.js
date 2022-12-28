import { combineReducers } from '@reduxjs/toolkit'
import { reducer as reducerRedux } from '@screens/redux/state'

const rootReducer = combineReducers({
  redux: reducerRedux,
})

export default rootReducer
