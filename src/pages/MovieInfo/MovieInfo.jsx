import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { getMovieById } from 'services/movieApi';
import { useState, useEffect, useRef, Suspense } from 'react';
import './MovieInfo.scss';

const MovieInfo = () => {
  const [movie, setMovie] = useState({});
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/movies');

  useEffect(() => {
    getMovieById(movieId).then(res => setMovie(res));
  }, [movieId]);

  const { title, poster_path, overview, genres, vote_average, release_date } =
    movie;

  return (
    <div>
      <Link to={backLinkLocationRef.current} className='goBack__btn'>Back to</Link>
      <div className="container">
        <img
          src={`https://image.tmdb.org/t/p/w300${poster_path}`}
          alt={title}
        />
        <div>
          <h2 className='movie__title'>
            {title}
            {`(${release_date && release_date.slice(0, 4)})`}
          </h2>
          <p className='userscore'>User score: {`${Math.round(vote_average * 10)}%`}</p>
          <p className='overview__title'>Overview</p>
          <p>{overview}</p>
          <p className='genres__title'>Genres</p>
          <p>{genres && genres.map(genre => genre.name).join(', ')}</p>
        </div>
      </div>

      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default MovieInfo;
