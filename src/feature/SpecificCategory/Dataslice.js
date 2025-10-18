import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchMealsByCategory = createAsyncThunk(
  'specificCategory/fetchMealsByCategory',
  async (category) => {
      const results = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`);
      return { category, meals: results.data.meals };
    
  }
);

const initialState = {
  mealsByCategory: {},
};

export const specificCategorySlice = createSlice({
  name: 'specificCategory',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
	builder.addCase(fetchMealsByCategory.fulfilled, (state, action) => {
        const { category, meals } = action.payload;
        state.mealsByCategory[category] = meals;
        state.loading = false;
        state.error = null;
      })
  
  },
});

export default specificCategorySlice.reducer;