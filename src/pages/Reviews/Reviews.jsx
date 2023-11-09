import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'fetchData';
import { useEffect, useState } from 'react';
import { ReviewsList } from 'components/ReviewsList/ReviewsList';
const Reviews = () => {
  const { postId } = useParams();
  const [currentReviews, setcurrentReviews] = useState([]);
  useEffect(() => {
    getMovieReviews(postId).then(response => {
      setcurrentReviews(response);
      console.log(response);
    });
  }, [postId]);

  return (
    <div>
      {currentReviews.length > 0 ? (
        <ReviewsList reviews={currentReviews} />
      ) : (
        <p>Opps!!! No reviews found</p>
      )}
    </div>
  );
};

export default Reviews;
