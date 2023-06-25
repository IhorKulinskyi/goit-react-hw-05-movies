import { useParams } from 'react-router-dom';
import { getMovieById } from 'services/movieApi';
import { useState, useEffect } from 'react';

const MovieInfo = () => {
  const [movie, setMovie] = useState({});
  const { movieId } = useParams();
  useEffect(() => {
    getMovieById(movieId).then(res => setMovie(res));
  }, [movieId]);
  return (
    <div>
      <h2>{movie.title}</h2>
      <img
        src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
        alt={movie.title}
      />
    </div>
  );
};

export default MovieInfo;
