import { useParams } from 'react-router-dom';
import { getMovieCast } from 'fetchData';
import { useEffect, useState } from 'react';
import { CastList } from 'components/CastList/CastList';
const Cast = () => {
  const { postId } = useParams();
  const [currentCast, setCurrentCast] = useState(null);
  const [error, setError] = useState(null);
  useEffect(() => {
    getMovieCast(postId)
      .then(response => {
        setCurrentCast(response);
        console.log(response);
      })
      .catch(err => {
        setError(err);
      });
  }, [postId]);
  return (
    <div>
      {error && <p>{error.message}</p>}
      {currentCast !== null && <CastList cast={currentCast} />};
    </div>
  );
};
export default Cast;
