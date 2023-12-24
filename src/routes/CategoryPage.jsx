import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { animals, birds } from "../animalsList.js";
import Card from "../Card.jsx";
import Header from "../Header.jsx";
import Footer from "../Footer.jsx";

const getCategoryData = (category) => {
  switch (category) {
    case "animals":
      return animals;
    case "birds":
      return birds;
    default:
      return [];
  }
};

const CategoryPage = () => {
  const { category } = useParams();
  const [categoryData, setCategoryData] = useState(getCategoryData(category));

  const handleRemoveCard = (name) => {
    setCategoryData((prevData) =>
      prevData.filter((item) => item.name !== name)
    );
  };

  useEffect(() => {
    setCategoryData(getCategoryData(category));
  }, [category]);

  return (
    <div>
      <Header />
      <h1>{category}</h1>
      <div className="card-container">
        {categoryData.map((item, index) => (
          <Card
            key={`${item.name}-${index}`}
            name={item.name}
            initialLikes={item.likes}
            category={category}
            onRemove={handleRemoveCard}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default CategoryPage;
