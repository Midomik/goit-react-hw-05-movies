import { useRef, useState } from 'react';
import { getMovieQuery } from 'fetchData';
import { SearchFilmList } from 'components/SearchFilmList/SearchFilmList';
import { Link, useLocation } from 'react-router-dom';
import css from './Movies.module.css';
const Movies = () => {
  const [findedFilms, setFindedFilms] = useState(null);

  const hendlerSubmitForm = e => {
    e.preventDefault();
    const query = e.currentTarget.elements.film_name.value;
    getMovieQuery(query).then(response => {
      setFindedFilms(response);
      console.log(response);
    });
  };
  const location = useLocation();
  const backLinkRef = useRef(location.state?.from ?? '/');
  return (
    <section>
      <div className={css.form_filed}>
        <Link className={css.back_link} to={backLinkRef.current}>
          Go back
        </Link>
        <form onSubmit={hendlerSubmitForm}>
          <input className={css.input_filed} name="film_name" />
          <button className={css.btn_submit} type="submit">
            Search
          </button>
        </form>
      </div>
      <div>
        {findedFilms !== null && <SearchFilmList movies={findedFilms} />}
        {findedFilms !== null && findedFilms.length === 0 ? (
          <p>Ooops! Film was not found! </p>
        ) : (
          ''
        )}
      </div>
    </section>
  );
};
export default Movies;
