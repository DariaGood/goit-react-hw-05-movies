import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { SharedLayout } from 'components/sharedLayout/SharedLayout';

const Cast = lazy(() => import('components/cast/Cast'));
const Reviews = lazy(() => import('components/reviews/Reviews'));
const Home = lazy(() => import('Pages/home/Home'));
const MovieDetails = lazy(() => import('Pages/movieDetails/MovieDetails'));
const Movies = lazy(() => import('Pages/movies/Movies'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="/movies" element={<Movies />} />

        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
};