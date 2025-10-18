import React, { useEffect} from 'react'
import { fetchCategories} from './DataSlice.js'
import { useSelector, useDispatch } from 'react-redux'
import './Categories.css'
import { Link } from 'react-router-dom'

const Categories = () => {
	const dispatch = useDispatch()
	const { categories} = useSelector((state) => state.Meals);
	

	useEffect(() => {
		dispatch(fetchCategories())
	}, [dispatch])

	

	return (
		<div>
			<div className="container">
				{categories && categories.map((item) => (
					<div className="card" key={item.idCategory}>
						<Link to={`/categories/${item.strCategory}`}>
							<img
								className="image"
								src={item.strCategoryThumb}
								alt={item.strCategory}
							/>
						</Link>
						<h3 className="title">{item.strCategory}</h3>
					</div>
				))}
			</div>
			
		</div>
	)
}

export default Categories