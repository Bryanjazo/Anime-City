import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'


const animeStore = createSlice({
  name: "anime",
  initialState:{
    modal: false
  },
  reducers:{
    setModalStatus: (state, action) => {
      state.modal = action.payload
    }
  }
})

export const {setModalStatus} = animeStore.actions

export default animeStore.reducer
