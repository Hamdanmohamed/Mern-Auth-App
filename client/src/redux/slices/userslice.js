import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    user: null, // Store user data
  };

const userslice = createSlice({
    name:"user",
initialState,
    reducers:{
        setUser:(state,action)=>{
          state.user = action.payload
        },
        clearUser:(state,action)=>{
          state.user= null
        }

    }
})


export const {setUser, clearUser} = userslice.actions;

export default userslice.reducer;