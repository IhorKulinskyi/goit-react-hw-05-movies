import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
import SharedLayout from './SharedLayout';
const Home = lazy(() => import('../pages/Home'));
const MovieSearch = lazy(() => import('../pages/Movies'));
const MovieInfo = lazy(() => import('../pages/MovieInfo'));
const CastList = lazy(() => import('./CastList'));
const ReviewsList = lazy(() => import('./ReviewsList'));

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
