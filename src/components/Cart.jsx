export default function Cart({ cartItems, removeFromCart }) {
  return (
    <div className="cart">
      <h3>Your Cart</h3>

      {cartItems.length === 0 && <p>No items added</p>}

      {cartItems.map(item => (
        <div key={item.id} className="cart-item">
          <span>{item.name}</span>

          <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
            <button onClick={() => removeFromCart(item)}>−</button>
            <span>{item.qty}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
