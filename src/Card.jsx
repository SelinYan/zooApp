import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Card.css";

const Card = ({ name, initialLikes, category, onRemove }) => {
  const imageUrl = `https://source.unsplash.com/400x400/?${name}`;

  const [likes, setLikes] = useState(initialLikes);
  const [isLiked, setIsLiked] = useState(false);

  const handleIncrement = () => {
    setLikes(likes + 1);
    setIsLiked(true);
  };

  const handleDecrement = () => {
    if (likes > 0) setLikes(likes - 1);
    setIsLiked(false);
  };

  const handleRemove = () => {
    onRemove(name);
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
        <img src={imageUrl} alt="unsplash random image" />
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
