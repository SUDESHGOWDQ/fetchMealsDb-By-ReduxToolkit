import {configureStore} from '@reduxjs/toolkit'

import DataReducer from '../feature/Categories/DataSlice'
import RandomDataReducer from '../feature/Random/RandomDataSlice'
import SpecificCategoryReducer from '../feature/SpecificCategory/Dataslice'
import SpecificMealReducer from '../feature/SpecificMeal/Dataslice'
import SearchReducer from '../feature/SearchData/SearchSlice'


export const store = configureStore({
	reducer:{
		Meals:DataReducer,
		Random:RandomDataReducer,
		SpecificCategory:SpecificCategoryReducer,
		SpecificMeal:SpecificMealReducer,
		search: SearchReducer
	}
})