import "./styles.css";
import carImg from "../../assets/car-card.png";

function CarCard() {
  return (
    <>
      <div className="ct-carcard">
        <div className="ct-img-container">
          <img src={carImg} alt="Car image" />
        </div>
        <h1>Lorem ipsum dolor</h1>
      </div>
    </>
  );
}

export default CarCard;
