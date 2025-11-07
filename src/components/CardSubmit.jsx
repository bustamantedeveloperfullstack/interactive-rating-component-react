import React from 'react';
import { CardButton } from './cardbutton/CardButton';

export const CardSubmit = ({ rating, setRating, onSubmit }) => {
  const handleRatingClick = (value) => setRating(value);

  return (
    <section className='card-submit'>
      <h2>How did we do?</h2>
      <p>Please let us know your rating.</p>
      <div className='rating-buttons'>
        {[...Array(5)].map((_, value) => (
          <CardButton
            key={value + 1}
            number={value + 1}
            selected={rating === value + 1}
            onClick={() => handleRatingClick(value + 1)}
          />
        ))}
      </div>
      <button
        className='submit-button'
        onClick={onSubmit}
      >
        Submit
      </button>
    </section>
  );
};
