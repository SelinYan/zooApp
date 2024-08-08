import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Card.css";

const Card = ({ name, initialLikes, category, onRemove }) => {
  const [imageUrl, setImageUrl] = useState("");
  const [likes, setLikes] = useState(initialLikes);
  const [isLiked, setIsLiked] = useState(false);

  // API key for Pexels
  const API_KEY = "MRVkRr0gOoCdwg8QfS0nbX6VNIjocapxF6zVMnD8bod48w6eQoIu5Qst";

  useEffect(() => {
    // Fetch image from Pexels
    const fetchImage = async () => {
      try {
        const response = await axios.get(`https://api.pexels.com/v1/search`, {
          headers: {
            Authorization: API_KEY,
          },
          params: {
            query: name,
            per_page: 1,
            orientation: "square",
          },
        });
        if (response.data.photos.length > 0) {
          setImageUrl(response.data.photos[0].src.medium); // Use the medium-sized image
        } else {
          setImageUrl("https://via.placeholder.com/400"); // Fallback if no image is found
        }
      } catch (error) {
        console.error("Error fetching image from Pexels:", error);
        setImageUrl("https://via.placeholder.com/400"); // Fallback if error occurs
      }
    };

    fetchImage();
  }, [name]);

  const handleIncrement = () => {
    setLikes(likes + 1);
    setIsLiked(true);
  };

  const handleDecrement = () => {
    if (likes > 0) setLikes(likes - 1);
    setIsLiked(false);
  };

  const handleRemove = () => {
    onRemove(name, category);
    // console.log(name, category);
  };

  return (
    <div className={`card ${isLiked ? "liked" : ""}`}>
      <Link
        to={{
          pathname: `/${category}/${name}`,
        }}
        state={{
          name,
          likes,
          imageUrl,
        }}
        style={{ textDecoration: "none", color: "inherit" }}>
        <img src={imageUrl} alt={name} />
        <div className="card-content">
          <h2 className="card">{name}</h2>
          {likes > 0 && (
            <h2 style={{ display: likes > 0 ? "block" : "none" }}>
              Likes: {likes}
            </h2>
          )}
        </div>
      </Link>
      <button className="close-button" onClick={handleRemove}>
        X
      </button>
      <button onClick={handleDecrement}>-</button>
      <span className={`material-symbols ${isLiked ? "liked" : ""}`}>
        {isLiked ? "❤️" : "🤍"}
      </span>
      <button onClick={handleIncrement}>+</button>
    </div>
  );
};

export default Card;
