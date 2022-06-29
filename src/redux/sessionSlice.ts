import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import * as sessionAPI from '@/api/session'
import * as utils from '@/utils/session'

export const sessionSlice = createSlice({
  name: 'session',
  initialState: {
    token: '',
    refreshToken: '',
    status: 'idle',
    error: null as string | null,
  },
  reducers: {
    //@TODO reducer to set status to idle
    refreshToken: (state, action) => {
      state.token = action.payload.token
      state.refreshToken = action.payload.refreshToken
    },
    logout: (state, action) => {
      state.token = ''
      state.refreshToken = ''
    },
    setSessionStatusToIdle: state => {
      state.status = 'idle'
    },
  },
  extraReducers(builder) {
    builder
      .addCase(doRegister.pending, (state, action) => {
        state.status = 'loading'
      })
      .addCase(doRegister.fulfilled, (state, action) => {
        state.status = 'succeeded'
      })
      .addCase(doRegister.rejected, (state, action) => {
        state.status = 'failed'
        if (action.error.message === undefined) {
          state.error = 'message was undefined'
        } else {
          state.error = action.error.message
        }
      })
      .addCase(login.pending, (state, action) => {
        state.status = 'loading'
      })
      .addCase(login.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.token = action.payload.token
        state.refreshToken = action.payload.refreshToken
      })
      .addCase(login.rejected, (state, action) => {
        state.status = 'failed'
        if (action.error.message === undefined) {
          state.error = 'message was undefined'
        } else {
          state.error = action.error.message
        }
      })
  },
})

export const {setSessionStatusToIdle} = sessionSlice.actions

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

export const login = createAsyncThunk(
  'session/login',
  async (loginCredentials: Login) => {
    const {email, password} = loginCredentials
    const response = await sessionAPI.login(email, password)
    await utils.setJWT(response.data.token)
    await utils.setRefreshJWT(response.data.refreshToken)
    return response.data
  },
)

export const refreshToken = createAsyncThunk(
  'session/refreshToken',
  async () => {
    const response = await sessionAPI.renewJWT()
    await utils.setJWT(response.data.token)
    await utils.setRefreshJWT(response.data.refreshToken)
    return response.data
  },
)

export const logout = createAsyncThunk('session/logout', async () => {
  const response = await sessionAPI.logout()
  await utils.clearJWT()
  await utils.clearRefreshJWT()
  return response.data
})

export default sessionSlice.reducer
