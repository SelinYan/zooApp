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
      <h1>{name}</h1>
      <img src={imageUrl} alt="unsplash random image" />
      <p>Likes: {likes}</p>
      <Footer />
    </div>
  );
};

export default SinglePage;
