import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const searchMealsAndCategories = createAsyncThunk(
  'search/searchMealsAndCategories',
  async (query) => {
    const mealRes = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
   
    const catRes = await axios.get('https://www.themealdb.com/api/json/v1/1/categories.php');
    const categories = catRes.data.categories.filter(cat =>
      cat.strCategory.toLowerCase().includes(query.toLowerCase())
    );
    return {
      meals: mealRes.data.meals || [],
      categories: categories || []
    };
  }
);

const searchSlice = createSlice({
  name: 'search',
  initialState: {
    meals: [],
    categories: [],
    loading: false,
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(searchMealsAndCategories.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(searchMealsAndCategories.fulfilled, (state, action) => {
        state.loading = false;
        state.meals = action.payload.meals;
        state.categories = action.payload.categories;
      })
      .addCase(searchMealsAndCategories.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  }
});

export default searchSlice.reducer;
