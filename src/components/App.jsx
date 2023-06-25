import { Routes, Route } from 'react-router-dom';
import SharedLayout from './SharedLayout';
import Home from 'pages/Home';
import MovieSearch from 'pages/Movies';
import MovieInfo from 'pages/MovieInfo';
import CastList from './CastList';
import ReviewsList from './ReviewsList';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />}></Route>
        <Route path="/movies" element={<MovieSearch />}></Route>
        <Route path="/movies/:movieId" element={<MovieInfo />}>
          <Route path="cast" element={<CastList />}></Route>
          <Route path="reviews" element={<ReviewsList />}></Route>
        </Route>
      </Route>
    </Routes>
  );
};
