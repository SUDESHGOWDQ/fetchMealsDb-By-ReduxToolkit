import React, { useEffect } from 'react';
import Modal from '../../Components/Modal/Modal';
import useModal from '../../Components/Modal/useModal';
import YouTube from 'react-youtube';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchMealById } from './Dataslice';
import './index.css';

const SpecificMeal = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const meal = useSelector((state) => state.SpecificMeal.meal);
  const loading = useSelector((state) => state.SpecificMeal.loading);
  const error = useSelector((state) => state.SpecificMeal.error);

  const { isOpen, open, close } = useModal();

  useEffect(() => {
    if (id) {
      dispatch(fetchMealById(id));
    }
  }, [dispatch, id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!meal) return <div>No meal found.</div>;

 
  let videoId = null;
  if (meal.strYoutube) {
    const match = meal.strYoutube.match(/[?&]v=([^&#]+)/);
    videoId = match ? match[1] : null;
  }

  return (
    <div className="specific-meal-details">
      <h2>{meal.strMeal}</h2>
      <img src={meal.strMealThumb} alt={meal.strMeal} />
      <div className='meal-category'><strong>Category:</strong> {meal.strCategory}</div>
      <div className='meal-area'><strong>Area:</strong> {meal.strArea}</div>
      <div className='meal-instruction'><strong>Instructions:</strong> {meal.strInstructions}</div>
      {videoId && (
        <>
          <button className="show-video-btn" onClick={open} style={{marginTop: '1rem'}}>Show Video</button>
          <Modal isOpen={isOpen} onClose={close}>
            <YouTube videoId={videoId} opts={{ width: '100%', height: '360' }} />
          </Modal>
        </>
      )}
    </div>
  );
};

export default SpecificMeal;
