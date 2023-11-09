import { Link, useLocation } from 'react-router-dom';

export const SearchFilmList = ({ movies }) => {
  const location = useLocation();
  return (
    <ul>
      {movies.map(item => {
        return (
          <li key={item.id}>
            <Link
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
