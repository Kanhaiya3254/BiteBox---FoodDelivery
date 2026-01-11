export default function CategoryTabs({ categories, category, setCategory }) {
  return (
    <div className="category-tabs">
      {categories.map((cat) => (
        <button
          key={cat.name}
          className={category === cat.name ? "active" : ""}
          onClick={() => setCategory(cat.name)}
        >
          {cat.icon && <span style={{ marginRight: "6px" }}>{cat.icon}</span>}
          {cat.name}
        </button>
      ))}
    </div>
  );
}
