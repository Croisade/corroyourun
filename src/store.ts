import {configureStore} from '@reduxjs/toolkit'
import sessionReducer from '@/redux/sessionSlice'
import accountReducer from '@/redux/accountSlice'

export default configureStore({
  reducer: {
    session: sessionReducer,
    account: accountReducer,
  },
})
