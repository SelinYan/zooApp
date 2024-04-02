import React from "react";
import Header from "../component/Header";

const AboutPage = () => {
  return (
    <div>
      <Header />
      <h2>About Page</h2>
      <p>Information about the project goes here.</p>
      <h3>Features Implemented:</h3>
      <ul>
        <li>Home Page with links to Animals and Birds pages</li>
        <li>Animals Page listing all animals with search functionality</li>
        <li>Birds Page listing all birds with search functionality</li>
        <li>
          About Page providing project information and a summary of features
        </li>
        <li>
          Refactored application to use CategoryPage and SinglePage components
        </li>
      </ul>
      <h3>What I Learned:</h3>
      <p>Share your learnings here...</p>
    </div>
  );
};

export default AboutPage;
