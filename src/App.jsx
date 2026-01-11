import { useState } from "react";
import Navbar from "./components/Navbar";
import SignIn from "./components/SignIn";
import CategoryTabs from "./components/CategoryTabs";
import FoodList from "./components/FoodList";
import HeroSection from "./components/HeroSection";
import CartDrawer from "./components/CartDrawer";
import Footer from "./components/Footer";

import foodData from "./data/foodData";
import { categories } from "./data/categories";
import useCart from "./hooks/useCart";

export default function App() {
  // Filters & UI states
  const [category, setCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [showSignIn, setShowSignIn] = useState(false);
  const [showCart, setShowCart] = useState(false);

  // Cart logic
  const { cartItems, addToCart, removeFromCart } = useCart();

  return (
    <>
      {/* 🔹 Navbar */}
      <Navbar
        cartItems={cartItems}
        onCartClick={() => setShowCart(true)}
        onSignIn={() => setShowSignIn(true)}
      />

      {/* 🔹 Sign In */}
      <SignIn
        isOpen={showSignIn}
        onClose={() => setShowSignIn(false)}
      />

      {/* 🔹 Hero Section */}
      <HeroSection
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />

      {/* 🔹 Categories */}
      <CategoryTabs
        categories={categories}
        category={category}
        setCategory={setCategory}
      />

      {/* 🔹 Food List */}
      <FoodList
        foodData={foodData}
        category={category}
        searchTerm={searchTerm}
        addToCart={addToCart}
      />

      {/* 🔹 Cart Drawer (Billing yahin aayega) */}
      <CartDrawer
        isOpen={showCart}
        onClose={() => setShowCart(false)}
        cartItems={cartItems}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
      />

      {/* 🔹 Footer */}
      <Footer />
    </>
  );
}
