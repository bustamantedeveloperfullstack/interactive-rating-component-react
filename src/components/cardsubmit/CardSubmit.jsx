import { CardButton } from '../cardbutton/CardButton';
import './CardSubmit.css';

export const CardSubmit = ({ rating, setRating, onSubmit }) => {
  const handleRatingClick = (value) => setRating(value);

  return (
    <section className='card-submit'>
      <img
        src='/public/icon-star.svg'
        alt='icon star'
        className='img'
      />
      <h2 className='title'>How did we do?</h2>
      <p className='paragraph'>
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
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
        SUBMIT
      </button>
    </section>
  );
};
