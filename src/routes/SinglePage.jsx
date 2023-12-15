import { useParams } from "react-router-dom";
import { animals, birds } from "../animalsList";

const getItemData = (category, itemName) => {
  const categoryData = category === "animals" ? animals : birds;
  return categoryData.find((item) => item.name === itemName) || null;
};

const SinglePage = () => {
  const { category, itemName } = useParams();
  const itemData = getItemData(category, itemName);

  if (!itemData) {
    return <div>Item not found</div>;
  }

  return (
    <div>
      <h1>{itemData.name}</h1>
      {/* Display other details of the item */}
      <p>Likes: {itemData.likes}</p>
    </div>
  );
};

export default SinglePage;
