import { getCredits } from 'services/movieApi';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const CastList = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  useEffect(() => {
    getCredits(movieId).then(res => setCast(res));
  }, [movieId]);
  return (
    <div>
      <ul>
        {cast.map(item => (
          <li key={item.id}>
            <img
              src={`https://image.tmdb.org/t/p/w185${item.profile_path}`}
              alt={`${item.original_name}`}
            />
            <p>{item.original_name}</p>
            <p>Character: {item.character}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CastList;
