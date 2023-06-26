import { useSearchParams, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getMovieByQuery } from 'services/movieApi';
import MovieList from 'components/MovieList';
import SearchForm from '../components/SearchForm/';

const MovieSearch = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('query') ?? '';
  const location = useLocation();

  useEffect(() => {
    if (searchQuery.trim() === '') {
      return;
    }

    getMovieByQuery(searchQuery).then(res => setMovies(res));
  }, [searchQuery]);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    setSearchParams({ query: form.elements.search.value });
  };

  return (
    <div>
      <SearchForm handleSubmit={handleSubmit} />
      <MovieList movies={movies} location={location} />
    </div>
  );
};

export default MovieSearch;
