import {getTrends} from 'services/movieApi';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    getTrends().then(res => setMovies(res));
  }, []);
  return (
    <ul>
      {movies.map(movie => (
        <li key={movie.id}><Link to={`/movies/${movie.id}`}>{movie.title}</Link></li>
      ))}
    </ul>
  );
};

export default Home;
