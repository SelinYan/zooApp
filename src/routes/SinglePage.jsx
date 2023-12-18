import { useParams, useLocation } from "react-router-dom";

const SinglePage = () => {
  const { category, itemName } = useParams();
  const location = useLocation();
  const { name, initialLikes, imageUrl } = location.state || {};

  if (!name) {
    return <div>Item not found</div>;
  }

  return (
    <div>
      <h1>{name}</h1>
      <img src={imageUrl} alt="unsplash random image" />
      <p>Likes: {initialLikes}</p>
    </div>
  );
};

export default SinglePage;
