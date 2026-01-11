import SearchBar from "./SearchBar";

export default function HeroSection({ searchTerm, setSearchTerm }) {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Delicious food, delivered to you 🍔🍕</h1>
        <p>Order from your favorite restaurants near you</p>

        <SearchBar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />
      </div>
    </section>
  );
}
