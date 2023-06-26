import { getDetails } from 'services/movieApi';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ReviewsList = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();
  useEffect(() => {
    getDetails(movieId, 'reviews').then(res => setReviews(res));
  }, [movieId]);
  return (
    <div>
      <ul>
        {!reviews.length ? (
          <p>No reviews</p>
        ) : (
          reviews.map(({ id, author, content }) => (
            <li key={id}>
              <h2>{author}</h2>
              <p>{content}</p>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default ReviewsList;
