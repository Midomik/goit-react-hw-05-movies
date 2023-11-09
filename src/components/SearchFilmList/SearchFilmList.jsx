import { Link } from 'react-router-dom';

export const SearchFilmList = ({ movies }) => {
  return (
    <ul>
      {movies.map(item => {
        return (
          <li key={item.id}>
            <Link to={{ pathname: `/movies/${item.id}` }}>{item.title}</Link>
          </li>
        );
      })}
    </ul>
  );
};
