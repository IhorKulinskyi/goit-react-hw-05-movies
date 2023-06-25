import { useSearchParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getMovieByQuery } from 'services/movieApi';

const MovieSearch = () => {
  const [movieList, setMovieList] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('query') ?? '';

  // const updateQueryString = e => {
  //   const param = e.target.value === '' ? {} : { query: e.target.value };
  //   setSearchParams(param);
  // };

  useEffect(() => {
    if (searchQuery.trim() === '') {
      return;
    }

    getMovieByQuery(searchQuery).then(res => setMovieList(res));
  }, [searchQuery]);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    setSearchParams({ query: form.elements.search.value });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          // value={searchQuery}
          type="text"
          name="search"
          // onChange={updateQueryString}
        />
        <button type="submit">Search</button>
      </form>
      <ul>
        {movieList.map(movie => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieSearch;
