import { Link, useLocation } from 'react-router-dom';
import css from './FilmList.module.css';
export const FilmList = ({ movies }) => {
  const location = useLocation();
  return (
    <ul className={css.film_list}>
      {movies.map(item => {
        return (
          <li key={item.id} className={css.item_list_film}>
            <Link
              className={css.link_item}
              state={{ from: location }}
              to={{ pathname: `/movies/${item.id}` }}
            >
              {item.title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
