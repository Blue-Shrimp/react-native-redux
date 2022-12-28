import { createSlice } from '@reduxjs/toolkit'

export const sliceName = 'redux'
const initialState = {
  redux: {
    check: '',
    plus: 1,
  },
  error: null,
}

const reducers = {
  checkRedux: (state, { payload }) => {},
  setRedux: (state, { payload }) => {
    state.redux = payload
  },
  setError: (state, { payload }) => {
    state.error = payload
  },
  onError: (state, { payload }) => {
    if (payload) {
      state.error = 'error'
    } else {
      state.error = null
    }
  },
}

const slice = createSlice({
  name: sliceName,
  initialState,
  reducers,
})

export const states = state => state[sliceName]
export const actions = slice.actions
export const reducer = slice.reducer
