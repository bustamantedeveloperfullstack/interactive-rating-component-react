import './CardThankyou.css';

export const CardThankyou = ({ rating }) => {
  return (
    <div className='card-thankyou'>
      <img
        src='/illustration-thank-you.svg'
        alt='thank you illustration'
        className='img-illustration'
      />
      <h3>You selected {rating} of 5</h3>
      <h2>Thank you!</h2>
      <p>
        We appreciate you taking the time to give a rating. If you ever need
        more support, don't hesitate to get in touch!
      </p>
    </div>
  );
};
