import React from "react";
import { useParams, useLocation } from "react-router-dom";
import Header from "../component/Header";
import Footer from "../component/Footer";

const SinglePage = () => {
  const { category } = useParams();
  const location = useLocation();

  const { name, likes, imageUrl } = location.state || {};

  if (!name) {
    return <div>Item not found</div>;
  }

  return (
    <div>
      <Header />
      <div className="single-card">
        <h2>{name}</h2>
        <img src={imageUrl} alt="unsplash random" />
        <p>Likes: {likes}</p>
      </div>
      <Footer />
    </div>
  );
};

export default SinglePage;
