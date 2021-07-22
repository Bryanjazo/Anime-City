import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'


const animeStore = createSlice({
  name: "anime",
  initialState:{
    modal: false,
    anime: []
  },
  reducers:{
    setModalStatus: (state, action) => {
      state.modal = action.payload
    },
    setAnimeDetail: (state, action) =>{
      state.anime.push(action.payload)
    }
  }
})

export const {setModalStatus} = animeStore.actions

export default animeStore.reducer
