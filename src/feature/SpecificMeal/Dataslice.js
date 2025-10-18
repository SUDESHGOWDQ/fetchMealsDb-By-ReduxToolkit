import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Async thunk to fetch meal details by ID
export const fetchMealById = createAsyncThunk(
	'SpecificMeal/fetchMealById',
	async (id) => {
		const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
		const data = await response.json();
		return data.meals ? data.meals[0] : null;
	}
);

const SpecificMealSlice = createSlice({
	name: 'SpecificMeal',
	initialState: {
		meal: null,
		loading: false,
		error: null,
	},
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchMealById.pending, (state) => {
				state.loading = true;
				state.error = null;
				state.meal = null;
			})
			.addCase(fetchMealById.fulfilled, (state, action) => {
				state.loading = false;
				state.meal = action.payload;
			})
			.addCase(fetchMealById.rejected, (state, action) => {
				state.loading = false;
				state.error = action.error.message;
			});
	},
});

export default SpecificMealSlice.reducer;
