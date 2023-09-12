import { createSlice ,createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
// import AxiosInst from "../../axiosConfig/instance";

 export const getTreinding=createAsyncThunk('movies/getTreinding',async ()=>{
    const {data} = await axios.get(`https://api.themoviedb.org/3/trending/movie/week?api_key=9fd4f82abd9873f00e717892f1f9ea97`)
    return data.results
})
// let initalState={Treindingmovies:[],loading:false}


 let TreindingSlice=createSlice({
    name: 'trending',
    initalState:{Treindingmovies:[],loading:false},
    extraReducers:(builder)=>{
        builder.addCase(getTreinding.fulfilled,(state,action)=>{
            state.Treindingmovies=action.payload
        })
    }




})
const tReducer= TreindingSlice.reducer
export default tReducer
