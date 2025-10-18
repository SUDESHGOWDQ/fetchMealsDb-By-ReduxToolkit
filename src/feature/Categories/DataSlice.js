import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchCategories = createAsyncThunk('Meals/fetchCategories', async () => {
	const results = await axios.get('https://www.themealdb.com/api/json/v1/1/categories.php')
	return results.data.categories
})



const initialState = {
	categories: [],
	mealsByCategory: {},
}

export const DataSlice = createSlice({
	name: "Meals",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(fetchCategories.fulfilled, (state, action) => {
			state.categories = action.payload;
		});
	}
})

export default DataSlice.reducer