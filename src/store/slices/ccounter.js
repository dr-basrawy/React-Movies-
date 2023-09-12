import { createSlice } from "@reduxjs/toolkit";


let initalState ={counter:0,username:"ahmed"}
let CounterSlice =createSlice({
    name: "counter",
    initialState:initalState,
    reducers:{
        increces:(state,actions)=>{state.counter +=1},
        decreces:(state,actions)=>{state.counter -=1},
        increceAmount:(state,actions)=>{state.counter += actions.payload}
    }
})

 export  let CounterReducer= CounterSlice.reducer;
export let {increces,decreces,increceAmount}=CounterSlice.actions;


