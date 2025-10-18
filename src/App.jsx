
import React, { useState } from 'react'
import {BrowserRouter,Routes,Route, useNavigate} from 'react-router-dom'
import Categories from './feature/Categories/Categories'
import Random from './feature/Random/index'
import Navbar from './components/Navbar/index'
import SearchResults from './feature/SearchData/SearchResults';
import Footer from './components/Footer'
import SpecificCategory from './feature/SpecificCategory/index'
import SpecificMeal from './feature/SpecificMeal/index'
import About from './components/About'


import { useDispatch } from 'react-redux';
import { searchMealsAndCategories } from './feature/SearchData/SearchSlice';

const App = () => {
		const [, setSearchQuery] = useState("");
	const [showResults, setShowResults] = useState(false);
	const dispatch = useDispatch();

	const handleSearch = (query) => {
		setSearchQuery(query);
		if (query && query.trim() !== "") {
			dispatch(searchMealsAndCategories(query));
			setShowResults(true);
		} else {
			setShowResults(false);
		}
	};

	return (
		<div className='App'>
			<BrowserRouter>
				<Navbar onSearch={handleSearch} />
				{showResults ? (
					<SearchResults />
				) : (
					<Routes>
						<Route path='/' element={<Random />} />
						<Route path='/categories' element={<Categories/>}/>
						<Route path='/categories/:category' element={<SpecificCategory/>}/>
						<Route path='/meal/:id' element={<SpecificMeal/>}/>
						<Route path='/about' element={<About/>}/>
					</Routes>
				)}
				<Footer />
			</BrowserRouter>
		</div>
	)
}

export default App