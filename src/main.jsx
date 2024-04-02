import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from "./routes/App.jsx";
import "./index.css";
import ErrorPage from "./routes/ErrorPage.jsx";
import CategoryPage from "./routes/CategoryPage.jsx";
import SinglePage from "./routes/SinglePage.jsx";
import AboutPage from "./routes/AboutPage.jsx";

const Main = () => {
  return (
    <Router basename={import.meta.env.DEV ? "/" : "/zooApp/"}>
      {/* in Dev (local) environment, root is "/"; when deploy to GH, root is "/zooApp/" */}
      <React.StrictMode>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/:category" element={<CategoryPage />} />
          <Route path="/:category/:name" element={<SinglePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/*" element={<ErrorPage />} />
        </Routes>
      </React.StrictMode>
    </Router>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<Main />);
