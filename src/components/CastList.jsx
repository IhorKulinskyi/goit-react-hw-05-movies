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
        {cast.map(({ id, original_name, character, profile_path }) => (
          <li key={id}>
            <img
              src={`https://image.tmdb.org/t/p/w185${profile_path}`}
              alt={`${original_name}`}
            />
            <p>{original_name}</p>
            <p>Character: {character}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CastList;
