import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import { Suspense, lazy } from 'react';

const Home = lazy(() => import('pages/Home/Home'));
const Movies = lazy(() => import('pages/Movies/Movies'));
const MovieDetails = lazy(() => import('./MovieDetails/MovieDetails'));
const Cast = lazy(() => import('pages/Cast/Cast'));
const Reviews = lazy(() => import('pages/Reviews/Reviews'));

export const App = () => {
  return (
    <div className="container">
      <Layout>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/movies/:postId" element={<MovieDetails />}>
              <Route path="/movies/:postId/cast" element={<Cast />} />
              <Route path="/movies/:postId/reviews" element={<Reviews />} />
            </Route>
          </Routes>
        </Suspense>
      </Layout>
    </div>
  );
};
