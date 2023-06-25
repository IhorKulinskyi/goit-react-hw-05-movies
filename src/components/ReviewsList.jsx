import { getReviews } from 'services/movieApi';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ReviewsList = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();
  useEffect(() => {
    getReviews(movieId).then(res => setReviews(res));
  }, [movieId]);
  return (
    <div>
      <ul>
        {!reviews.length ? (
          <p>No reviews</p>
        ) : (
          reviews.map(review => (
            <li key={review.id}>
              <h2>{review.author}</h2>
              <p>{review.content}</p>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default ReviewsList;
