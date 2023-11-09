export const ReviewsList = ({ reviews }) => {
  return (
    <ul>
      {reviews.map(item => {
        return (
          <li key={item.id}>
            <h3>Author: {item.author}</h3>
            <p>{item.content}</p>
          </li>
        );
      })}
    </ul>
  );
};
