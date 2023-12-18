import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from "./routes/App.jsx";
import "./index.css";
import ErrorPage from "./ErrorPage.jsx";
import CategoryPage from "./routes/CategoryPage.jsx";
import SinglePage from "./routes/SinglePage.jsx";

const Main = () => {
  return (
    <Router>
      <React.StrictMode>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/:category" element={<CategoryPage />} />
          <Route path="/:category/:itemName" element={<SinglePage />} />
        </Routes>
      </React.StrictMode>
    </Router>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<Main />);
