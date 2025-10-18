import React,{useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {useParams,Link} from 'react-router-dom'
import {fetchMealsByCategory} from './Dataslice'
import './index.css'

const SpecificCategory = () => {
	const dispatch = useDispatch()
	const { category } = useParams()
	const { mealsByCategory } = useSelector((state) => state.SpecificCategory)

	useEffect(() => {
		dispatch(fetchMealsByCategory(category))
	}, [dispatch, category])

	
	

	return (
		<div className='specific-category'>
			{
				Array.isArray(mealsByCategory[category]) &&
				mealsByCategory[category].map((item,index)=>{
					return(
						<div key={index} className='specific-category-card'>
						    <Link to={`/meal/${item.idMeal}`}>
							<img src={item.strMealThumb} alt={item.strMeal} />
							</Link>
							<h3>{item.strMeal}</h3>
						</div>
					)
				})
			}
		</div>
	)
}

export default SpecificCategory