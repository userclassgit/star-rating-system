import { useState } from 'react';
import { FaStar } from 'react-icons/fa';

function StarRating() {
  const [rating, setRating] = useState(0);
  const stars = Array(5).fill(0);

  return (
    <div>
      {stars.map((_, index) => (
        <FaStar
          key={index}
          color={index < rating ? 'gold' : 'grey'}
          onClick={() => setRating(index + 1)}
        />
      ))}
      {/* Add an "s" at the end if there's more than 1 star (plural) */}
      <p>{rating} star{rating !== 1 && 's'}</p>
    </div>
  );
}

export default StarRating;