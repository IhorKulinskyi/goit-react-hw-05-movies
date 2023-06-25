import { Routes, Route } from 'react-router-dom';
import SharedLayout from './SharedLayout';
import Home from 'pages/Home';
import MovieList from 'pages/Movies';
import MovieInfo from "pages/MovieInfo";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />}></Route>
        <Route path="/movies" element={<MovieList />}></Route>
        <Route path="/movies/:movieId" element={<MovieInfo />}></Route>
      </Route>
    </Routes>
  );
};
