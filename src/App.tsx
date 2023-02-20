import "./App.css";
import CarCard from "./components/CarCard";
import CommentCard from "./components/CommentCard";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <main>
        <section id="ct-cardlist-section">
          <h1 className="ct-cars-cardlist-title">Venha nos visitar</h1>
          <div className="ct-cars-cardlist">
            <CarCard />
            <CarCard />
          </div>
        </section>
        <section id="ct-comments-section">
          <div className="ct-cars-comments-title">O que estão dizendo</div>
          <div>
            <CommentCard />
            <CommentCard />
            <CommentCard />
            <CommentCard />
            <CommentCard />
            <CommentCard />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App;
