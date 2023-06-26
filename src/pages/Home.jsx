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
    // <ul>
    //   {movies.map(({ id, title }) => (
    //     <li key={id}>
    //       <Link to={`/movies/${id}`} state={{ from: location }}>
    //         {title}
    //       </Link>
    //     </li>
    //   ))}
    // </ul>
  );
};

export default Home;
