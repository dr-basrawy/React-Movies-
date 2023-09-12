import { createSlice } from "@reduxjs/toolkit";





const languageSlice=createSlice({
    name:"language",
    initialState:{language:'en'},
    reducers:{
      changLanguage:function(state,action) {
         state.language = action.payload
      }

    }


})
// export default changLanguage;
export const{changLanguage} = languageSlice.actions
export default languageSlice.reducer
