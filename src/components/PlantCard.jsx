
import "./PlantCard.css";

export function PlantCard({ plant, cart, handleAdd }) {
  const isAdded = cart.some((item) => item.id === plant.id);

  return (
    <div className="plant-card">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>${plant.price}</p>
      <button onClick={() => handleAdd(plant)} disabled={isAdded}>
        {isAdded ? "Added" : "Add to Cart"}
      </button>
    </div>
  );
}

