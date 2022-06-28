import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import * as sessionAPI from '@/api/session'

export const counterSlice = createSlice({
  name: 'session',
  initialState: {
    JWT: '',
    refreshToken: '',
    status: 'idle',
    error: null as string | null,
  },
  reducers: {
    // doLogin: (state, action) => {
    //   return {...state, action}
    // },
    // doRegister: (state, action) => {
    //   return {...state, action}
    // },
    // onError: (state, action) => {
    //   return {...state, error: action}
    // },
  },
  extraReducers(builder) {
    builder
      .addCase(doRegister.pending, (state, action) => {
        state.status = 'loading'
      })
      .addCase(doRegister.fulfilled, (state, action) => {
        state.status = 'succeeded'
        // Add any fetched posts to the array
        // const {jwt, refreshJWT} = action.payload
        // return {...state, jwt, refreshJWT, status: 'succeeded'}
      })
      .addCase(doRegister.rejected, (state, action) => {
        state.status = 'failed'
        if (action.error.message === undefined) {
          state.error = 'message was undefined'
        } else {
          state.error = action.error.message
        }
      })
  },
})

// export const {doLogin} = counterSlice.actions

interface Login {
  email: string
  password: string
}

export const doRegister = createAsyncThunk(
  'session/doRegister',
  async (login: Login) => {
    const {email, password} = login
    const response = await sessionAPI.register(email, password)
    return response.data
  },
)

export default counterSlice.reducer
