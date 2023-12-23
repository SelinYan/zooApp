import Header from "../Header";
import Footer from "../Footer";
import { animals, birds } from "../animalsList";
import Card from "../Card";

const App = () => {
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
            />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default App;
