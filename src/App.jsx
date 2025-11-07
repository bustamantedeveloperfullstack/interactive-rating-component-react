import { useState } from 'react';
import { CardSubmit, CardThankyou } from './components';
import './App.css';

function App() {
  const [rating, setRating] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (rating !== null) {
      setSubmitted(true);
    }
  };

  return (
    <main>
      <h1>Hello, World!</h1>
      {!submitted ? (
        <CardSubmit
          rating={rating}
          setRating={setRating}
          onSubmit={handleSubmit}
        />
      ) : (
        <CardThankyou rating={rating} />
      )}
    </main>
  );
}

export default App;
