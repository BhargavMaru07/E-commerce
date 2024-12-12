import { createSlice } from "@reduxjs/toolkit";

const initialState = JSON.parse(localStorage.getItem('cart')) ?? []
const cardSlice = createSlice({ 
    name:"card",
    initialState,
    reducers:{
        addToCart(state,action){
            // state.push(action.payload)
            return[...state,action.payload]
        },
        deleteFromCart(state,action){
            return state.filter(item => item.id !== action.payload.id)
        }
    }
})

export const {addToCart,deleteFromCart} = cardSlice.actions
export default cardSlice.reducer