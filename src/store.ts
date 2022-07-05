import {configureStore} from '@reduxjs/toolkit'
import sessionReducer from '@/redux/sessionSlice'
import accountReducer from '@/redux/accountSlice'
import runReducer from '@/redux/runSlice'

export default configureStore({
  reducer: {
    session: sessionReducer,
    account: accountReducer,
    run: runReducer,
  },
})
