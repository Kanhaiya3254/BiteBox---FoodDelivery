export default function FoodCard({ food, addToCart }) {
  return (
    <div className="food-card">

      <div className="food-img-wrapper">
        {food.offer && (
          <span className="offer-badge">{food.offer}</span>
        )}

        <img
          src={food.img}
          alt={food.name}
          loading="lazy"
          decoding="async"
        />
      </div>

      <div className="food-content">
        <h4>{food.name}</h4>
        <p className="desc">{food.desc}</p>

        <div className="food-footer">
          <span className="price">₹{food.price}</span>
          <button onClick={() => addToCart(food)}>Add</button>
        </div>
      </div>

    </div>
  );
}
