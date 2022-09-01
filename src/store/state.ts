import multicall from "../lib/state/multicall"
import {configureStore} from '@reduxjs/toolkit'
import {setupListeners} from '@reduxjs/toolkit/query/react'

const store = configureStore({
  reducer: {
    multicall: multicall.reducer
  }
})

setupListeners(store.dispatch)

export default store