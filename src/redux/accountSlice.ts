import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import * as accountAPI from '@/api/account'
import * as utils from '@/utils/account'

export const accountSlice = createSlice({
  name: 'account',
  initialState: {
    accountId: '',
    status: 'idle',
    error: null as string | null,
  },
  reducers: {
    setAccountStatusToIdle: state => {
      state.status = 'idle'
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getAccount.pending, (state, action) => {
        state.status = 'loading'
      })
      .addCase(getAccount.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.accountId = action.payload.accountId
      })
      .addCase(getAccount.rejected, (state, action) => {
        state.status = 'failed'
        if (action.error.message === undefined) {
          state.error = 'message was undefined'
        } else {
          state.error = action.error.message
        }
      })
  },
})

export const {setAccountStatusToIdle} = accountSlice.actions

export const getAccount = createAsyncThunk(
  'account/getAccount',
  async (email: string) => {
    const response = await accountAPI.getAccount(email)
    console.log(response.data)
    await utils.setAccountId(response.data.accountId)
    return response.data
  },
)

export default accountSlice.reducer
