import {configureStore} from '@reduxjs/toolkit'
import sessionReducer from '@/redux/sessionSlice'

export default configureStore({
  reducer: {
    session: sessionReducer,
  },
})
