import React from "react";
import Header from "../component/Header";
import Footer from "../component/Footer";
import { Link } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Header />
      <main>
        <div className="home-page">
          <h2>Animals or Birds? 🦊 🐦</h2>
          <div className="big-image-links">
            <div className="image-container">
              <Link to="/animals">
                <img
                  src="https://images.unsplash.com/photo-1474511320723-9a56873867b5?q=80&w=2672&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Animals"
                />
              </Link>
            </div>
            <div className="image-container">
              <Link to="/birds">
                <img
                  src="https://images.unsplash.com/photo-1606567595334-d39972c85dbe?q=80&w=2403&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Birds"
                />
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;
