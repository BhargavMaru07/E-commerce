import { createSlice } from "@reduxjs/toolkit";

const initialState = []
const cardSlice = createSlice({ 
    name:"card",
    initialState,
    reducers:{
        addToCart(state,action){
            state.push(action.payload)
        },
        deleteFromCart(state,action){
            return state.filter(item => item.id !== action.payload.id)
        }
    }
})

export const {addToCart,deleteFromCart} = cardSlice.actions
export default cardSlice.reducer