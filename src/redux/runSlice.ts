import {createSlice} from '@reduxjs/toolkit'

export const runSlice = createSlice({
  name: 'run',
  initialState: {
    isUpdated: false,
    status: 'idle',
    error: null as string | null,
  },
  reducers: {
    setIsUpdatedTrue: state => {
      state.isUpdated = true
    },
    setIsUpdatedFalse: state => {
      state.isUpdated = false
    },
  },
})

export const {setIsUpdatedFalse, setIsUpdatedTrue} = runSlice.actions

export default runSlice.reducer
