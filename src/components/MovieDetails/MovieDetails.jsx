import { Link, useLocation, useParams, Outlet } from 'react-router-dom';
import { getFilm } from 'fetchData';
import { Suspense, useEffect, useRef, useState } from 'react';
import css from './MoveDetails.module.css';

const MovieDetails = ({ children }) => {
  const { postId } = useParams();
  console.log(postId);
  const [selectFilm, setSelectFilm] = useState('');
  const [error, setError] = useState(null);
  const location = useLocation();
  const backLinkRef = useRef(location.state?.from ?? '/');
  useEffect(() => {
    getFilm(postId)
      .then(response => {
        setSelectFilm(response);
        console.log(response);
      })
      .catch(err => {
        setError(err);
      });
  }, [postId]);

  return (
    <section>
      {error && <p>{error.message}</p>}
      <Link className={css.back_link} to={backLinkRef.current}>
        Go back
      </Link>
      <div className={css.film_info_container}>
        <img
          className={css.img_film}
          src={`https://image.tmdb.org/t/p/w500` + selectFilm.poster_path}
          alt={'film poster'}
        />
        <div className="film_info">
          <h2>
            {selectFilm.original_title +
              `(${
                selectFilm.release_date && selectFilm.release_date.slice(0, 4)
              })`}
          </h2>
          <p>Rating: {selectFilm.vote_average}</p>
          <h3>Overview</h3>
          <p>{selectFilm.overview}</p>
          <h3>Genres</h3>
          <p>
            {selectFilm.genres &&
              selectFilm.genres.map(item => {
                return item.name + ' ';
              })}
          </p>
        </div>
      </div>
      <div className={css.additional_information_container}>
        <Link
          state={{ from: backLinkRef }}
          className={css.cast_link}
          to={`/movies/${postId}/cast`}
        >
          Cast
        </Link>
        <Link
          state={{ from: backLinkRef }}
          className={css.reviews_link}
          to={`/movies/${postId}/reviews`}
        >
          Reviews
        </Link>
      </div>
      <Suspense>
        <div>
          <Outlet />
        </div>
      </Suspense>
    </section>
  );
};

export default MovieDetails;
