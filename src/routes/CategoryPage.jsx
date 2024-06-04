import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { animals, birds } from "../animalsList.js";
import Card from "../component/Card.jsx";
import Header from "../component/Header.jsx";
import Footer from "../component/Footer.jsx";

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
  const [categoryData, setCategoryData] = useState(getCategoryData(category)); //initial state: get all data
  const [searchQuery, setSearchQuery] = useState("");

  const handleRemoveCard = (name) => {
    setCategoryData(categoryData.filter((item) => item.name !== name));
  }; //filter out item

  //whenever the category changes, update the data displayed on the page to match the new category
  useEffect(() => {
    setCategoryData(getCategoryData(category));
  }, [category]);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  // Filter categoryData based on search query
  const filteredData = categoryData.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <Header />
      <div className="title-and-search">
        <h2>{category}</h2>
        <div className="search-input-container">
          <input
            type="text"
            placeholder="&#x1F50D;Search by name.."
            value={searchQuery}
            onChange={handleSearchChange}
            className="search-input"
          />
        </div>
      </div>
      <div className="card-container">
        {/* map function returns an array of items using the Card component */}
        {/* map over the filteredData array instead of the categoryData  */}
        {filteredData.map((item, index) => (
          <Card
            key={`${item.name}-${index}`} //a more robust and unique identifier
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
