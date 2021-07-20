import { configureStore } from '@reduxjs/toolkit'
import animeStore from './reducerRedux.js'

export const store = configureStore({
  reducer: {
    anime: animeStore
  },
})
