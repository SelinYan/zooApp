import React from "react";
import Header from "../component/Header";
import Footer from "../component/Footer";

const AboutPage = () => {
  return (
    <div>
      <Header />
      <div style={{ padding: "20px" }}>
        <h2>About Zoo App</h2>
        <p>
          Zoo App is a web application that allows users to explore and learn
          about various animals and birds. It provides information about
          different categories of animals and birds, such as their names,
          images, and popularity among users.
        </p>
        <h3>Features Implemented:</h3>
        <ul>
          <li>Navigation Links: Home, Animals, Birds, About</li>
          <li>Home Page: Displays links to Animals and Birds pages</li>
          <li>Animals Page: Lists all animals with a search feature</li>
          <li>Birds Page: Lists all birds with a search feature</li>
          <li>
            About Page: Provides information about the project and features
          </li>
        </ul>
        <h3>What I Learned:</h3>
        <p>
          While working on this project, I learned how to create a multi-page
          web application using React and React Router. I gained experience in
          managing state and props, implementing dynamic routing, and styling
          components using CSS. I also learned how to structure components and
          manage project files effectively.
        </p>
        <p>
          Additionally, I learned about the importance of planning and
          organizing code, as well as the iterative process of development,
          testing, and debugging. Overall, this project helped me enhance my
          skills in frontend web development and gain a deeper understanding of
          React.js.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default AboutPage;
