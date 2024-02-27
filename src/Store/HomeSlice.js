import { createSlice } from '@reduxjs/toolkit'

const initialState = {
 url:{},
 genres:{}
}

export const HomeSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
getApiConfiguration:(state,action)=>{
    state.url = action.payload
},
getGenresConfiguration:(state,action)=>{
    state.genres = action.payload
},
  },
})


export const { getApiConfiguration,getGenresConfiguration} = HomeSlice.actions

export default HomeSlice.reducer