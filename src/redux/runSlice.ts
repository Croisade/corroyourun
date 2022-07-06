import {createSlice} from '@reduxjs/toolkit'

// const states = ['idle', 'updating', 'updated']

const initialState = {
  isUpdated: 'idle',
  status: 'idle',
  error: null as string | null,
}

export const runSlice = createSlice({
  name: 'run',
  initialState,
  reducers: {
    setIsUpdatedIdle: state => {
      state.isUpdated = 'idle'
    },
    setIsUpdatedUpdating: state => {
      state.isUpdated = 'updating'
    },
    setIsUpdatedUpdated: state => {
      state.isUpdated = 'updated'
    },
    resetRun: state => {
      return {state, ...initialState}
    },
  },
})

export const {
  resetRun,
  setIsUpdatedIdle,
  setIsUpdatedUpdated,
  setIsUpdatedUpdating,
} = runSlice.actions

export default runSlice.reducer
