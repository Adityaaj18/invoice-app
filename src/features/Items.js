import { createSlice } from '@reduxjs/toolkit'
import { itemData } from '../FakeData'

export const itemsSlice = createSlice({
   name: 'items',
   initialState: { value: itemData },
   reducers: {
      addItem: (state, action) => {
         state.value.push(action.payload)
      },

      deleteItem: (state, action) => {
         state.value = state.value.filter(
            (item) => item.id !== action.payload.id
         )
      },
      updateQuantity: (state, action) => {
         state.value.map((item) => {
            if (item.id === action.payload.id) {
               item.quantity = action.payload.quantity
               item.price = action.payload.price
               item.tax = action.payload.tax
               item.discount = action.payload.discount
               item.name = action.payload.name
            }
         })
      }
   }
})

export const { addItem, deleteItem, updateQuantity } = itemsSlice.actions

export default itemsSlice.reducer
