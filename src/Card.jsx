import React from "react";
import { Link } from "react-router-dom";
import "./Card.css";

const Card = ({ name, likes }) => {
  const imageUrl = `https://source.unsplash.com/400x400/?${name}`;

  return (
    <div className="card">
      <Link
        to={`/single/${name}`}
        style={{ textDecoration: "none", color: "inherit" }}></Link>
      <img src={imageUrl} alt="unsplash random image" />
      <div className="card-content">
        <h2 className="card">{name}</h2>
        <h2>{likes}</h2>
      </div>
      <button>close</button>
      <button>-</button>
      <span className="material-symbols-outlined">favorite</span>
      <button>+</button>
    </div>
  );
};

export default Card;
