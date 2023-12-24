import React, { useState } from "react";
import Header from "../Header";
import Footer from "../Footer";
import { animals, birds } from "../animalsList";
import Card from "../Card";

const App = () => {
  const [animalsData, setAnimalsData] = useState(animals);
  const [birdsData, setBirdsData] = useState(birds);

  const handleRemoveCard = (name, category) => {
    if (category === "animals") {
      setAnimalsData((prevData) =>
        prevData.filter((item) => item.name !== name)
      );
    } else if (category === "birds") {
      setBirdsData((prevData) => prevData.filter((item) => item.name !== name));
    }
  };

  return (
    <div>
      <Header />
      <main>
        <div className="card-container">
          {animals.map((item) => (
            <Card
              key={item.name}
              name={item.name}
              initialLikes={item.likes}
              category={"animals"}
              onRemove={() => handleRemoveCard(item.name, "animals")}
            />
          ))}
        </div>
        <div className="card-container">
          {birds.map((item) => (
            <Card
              key={item.name}
              name={item.name}
              initialLikes={item.likes}
              category={"birds"}
              onRemove={() => handleRemoveCard(item.name, "birds")}
            />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default App;
