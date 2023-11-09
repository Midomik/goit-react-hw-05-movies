import {
  Link,
  Route,
  Routes,
  useLocation,
  useParams,
  Switch,
  Outlet,
} from 'react-router-dom';
import { getFilm } from 'fetchData';
import { useEffect, useRef, useState } from 'react';
import css from './MoveDetails.module.css';
import { Cast } from 'pages/Cast/Cast';
import { Reviews } from 'pages/Reviews/Reviews';

const MovieDetails = ({ children }) => {
  const { postId } = useParams();
  console.log(postId);
  const [selectFilm, setSelectFilm] = useState('');
  const location = useLocation();
  const backLinkRef = useRef(location.state?.from ?? '/');
  useEffect(() => {
    getFilm(postId).then(response => {
      setSelectFilm(response);
      console.log(response);
    });
  }, [postId]);

  return (
    <section>
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
        <Link className={css.cast_link} to={`/movies/${postId}/cast`}>
          Cast
        </Link>
        <Link className={css.reviews_link} to={`/movies/${postId}/reviews`}>
          Reviews
        </Link>
      </div>
      <div>
        <Outlet />
      </div>
    </section>
  );
};

export default MovieDetails;
