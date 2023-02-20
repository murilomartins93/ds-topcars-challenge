import "./App.css";
import CarCard from "./components/CarCard";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <main>
        <section id="ct-cars-cardlist">
          <h1 className="ct-cars-cardlist-title">Venha nos visitar</h1>
          <CarCard />
          <CarCard />
        </section>
        <section id="ct-comments"></section>
      </main>
    </>
  );
}

export default App;
