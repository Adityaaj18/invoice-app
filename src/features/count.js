import { createSlice } from '@reduxjs/toolkit'

export const countSlice = createSlice({
   name: 'count',
   initialState: { count: 25 },
   reducers: {
      increment: (state, action) => {
         state.count += action.payload
      },
      decrement: (state, action) => {
         state.count -= action.payload
      },
      decCount: (state, action) => {
         state.count = action.payload
      }
   }
})

export const { increment, decrement, decCount } = countSlice.actions

export default countSlice.reducer
