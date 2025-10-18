import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './SearchResults.css';

const SearchResults = () => {
  const { meals, categories, loading, error } = useSelector((state) => state.search);

  if (loading) return <div className="search-results">Searching...</div>;
  if (error) return <div className="search-results">Error: {error}</div>;
  if (!meals.length && !categories.length) return <div className="search-results">No results found.</div>;

  return (
    <div className="search-results">
      {categories.length > 0 && (
        <div>
          <h3>Categories</h3>
          <div className="search-category-list">
            {categories.map((cat) => (
              <div key={cat.idCategory} className="search-category-card">
                <Link to={`/categories/${cat.strCategory}`}>
                  <img src={cat.strCategoryThumb} alt={cat.strCategory} />
                  <div>{cat.strCategory}</div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      )}
      {meals.length > 0 && (
        <div>
          <h3>Meals</h3>
          <div className="search-meal-list">
            {meals.map((meal) => (
              <div key={meal.idMeal} className="search-meal-card">
                <Link to={`/meal/${meal.idMeal}`}>
                  <img src={meal.strMealThumb} alt={meal.strMeal} />
                  <div>{meal.strMeal}</div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchResults;
