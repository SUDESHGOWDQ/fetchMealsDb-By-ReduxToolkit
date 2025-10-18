import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";



export const fetchRandomData = createAsyncThunk('Random/fetchRandomData',async()=>{
	const results = await axios.get('https://www.themealdb.com/api/json/v1/1/random.php')
	return results.data.meals
}) 


export const RandomDataSlice = createSlice({
	name: "Random",
	initialState: [],	
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(fetchRandomData.fulfilled, (state, action) => {
			return action.payload;
		});
	}
})

export default RandomDataSlice.reducer