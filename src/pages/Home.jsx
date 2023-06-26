import { getTrends } from 'services/movieApi';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import MovieList from 'components/MovieList';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();
  useEffect(() => {
    getTrends().then(res => setMovies(res));
  }, []);
  return (
    <MovieList movies={movies} location={location} />
  );
};

export default Home;
