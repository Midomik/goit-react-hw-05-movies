import css from './Cast.module.css';
export const CastList = ({ cast }) => {
  return (
    <ul className={css.cast_list}>
      {cast.map(item => {
        return (
          <li className={css.item_cast_list} key={item.id}>
            <img
              className={css.cast_img}
              src={`https://image.tmdb.org/t/p/w500` + item.profile_path}
              alt=""
            />
            <p className={css.name}>{item.name}</p>
            <p className={css.chsracter}>Character: {item.character}</p>
          </li>
        );
      })}
    </ul>
  );
};
