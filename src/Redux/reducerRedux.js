import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const getAnimeDetails = createAsyncThunk(
  'anime/setAnimeDetail',
  async(id) => {
    const response = await fetch(`http://localhost:3000/animes/${id}`)
      const data = await response.json()
      return data
  }
)
export const getUserDetails = createAsyncThunk(
  'anime/getUserDetails',
  async(id) => {
    const response = await fetch(`http://localhost:3000/users/${id}`)
      const data = await response.json()
      return data
  }
)
const animeStore = createSlice({
  name: "anime",
  initialState:{
    modal: false,
    anime: [],
    user: localStorage.user,
    userDetails: {}
  },
  reducers:{
    setModalStatus: (state, action) => {
      state.modal = action.payload
    },
    setAnimeDetail: (state, action) =>{
      state.anime.push(action.payload)
    },
    clearAnimeHome: (state,action) => {
      state.anime = []
    },
    setUser: (state, action) => {
       state.user = action.payload
    },
    setUserDetails: (state, action) => {
       state.userDetails = action.payload
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getAnimeDetails.fulfilled, (state, action) =>{
      state.anime.push(action.payload)
    })
    builder.addCase(getUserDetails.fulfilled, (state, action) =>{
      state.userDetails = action.payload
    })
  },


})

export const {setModalStatus, setAnimeDetail, clearAnimeHome, setUser} = animeStore.actions

export default animeStore.reducer
