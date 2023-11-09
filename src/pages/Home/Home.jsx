import { FilmList } from 'components/FilmList/FilmList';
import { getTrending } from 'fetchData';
import { useEffect, useState } from 'react';
const trendingFilmArr = getTrending();
console.log(trendingFilmArr);

const Home = () => {
  const [movies, setMovies] = useState(null);
  const [error, setError] = useState(null);
  useEffect(() => {
    getTrending()
      .then(response => {
        setMovies(response);
      })
      .catch(err => {
        setError(err);
      });
  }, []);
  return (
    <section className="home_section">
      {error&&<p>{error.message}</p>}
      {movies !== null && <FilmList movies={movies} />}
    </section>
  );
};
export default Home;
