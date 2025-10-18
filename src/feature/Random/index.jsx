import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchRandomData } from './RandomDataSlice'
import './index.css'

const Index = () => {
  const dispatch = useDispatch();
  const randomData = useSelector((state) => state.Random[0]);


  useEffect(() => {
    dispatch(fetchRandomData());
  },[dispatch]);

  if (!randomData) {
    return <div className="random-data">Loading...</div>;
  }


  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    const ingredient = randomData[`strIngredient${i}`];
    const measure = randomData[`strMeasure${i}`];
    if (ingredient && ingredient.trim() !== "") {
      ingredients.push(`${measure ? measure : ''} ${ingredient}`.trim());
    }
  }

  return (
    <div className='random-data'>
      <div>{randomData.strMeal}</div>
      <img src={randomData.strMealThumb} alt={randomData.strMeal} />
      <div><strong>Category:</strong> {randomData.strCategory}</div>
      <div><strong>Area:</strong> {randomData.strArea}</div>
      {randomData.strTags && <p><strong>Tags:</strong> {randomData.strTags}</p>}
      <div>Ingredients</div>
      <div>
        {ingredients.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </div>
    </div>
  );
};

export default Index;
