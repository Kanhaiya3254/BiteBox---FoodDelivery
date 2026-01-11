import FoodCard from "./FoodCard";

export default function FoodList({ foodData, category, searchTerm, addToCart }) {
  const filtered = foodData.filter((food) => {
    const matchesCategory = category === "All" || food.categoryGroup === category;
    const matchesSearch = food.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="menu-grid">
      {filtered.map((food) => (
        <FoodCard key={food.id} food={food} addToCart={addToCart} />
      ))}
    </div>
  );
}
