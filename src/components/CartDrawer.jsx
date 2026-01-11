import { useState } from "react";

export default function CartDrawer({ isOpen, onClose, cartItems, addToCart, removeFromCart }) {
  const [showPayment, setShowPayment] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("");
  const [paymentComplete, setPaymentComplete] = useState(false);
  const [upiId, setUpiId] = useState("");
  const [cardDetails, setCardDetails] = useState({ number: "", name: "", expiry: "", cvv: "" });

  if (!isOpen) return null;

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.qty, 0);
  const delivery = subtotal > 0 ? 40 : 0;
  const tax = Math.round(subtotal * 0.05);
  const total = subtotal + delivery + tax;

  const handlePayment = () => {
    // Simple mock payment logic
    setPaymentComplete(true);
  };

  const resetPayment = () => {
    setShowPayment(false);
    setPaymentMethod("");
    setPaymentComplete(false);
    setUpiId("");
    setCardDetails({ number: "", name: "", expiry: "", cvv: "" });
  };

  return (
    <>
      {/* Overlay */}
      <div className="overlay" onClick={onClose}></div>

      {/* Cart Drawer */}
      <div className="cart-drawer open">
        <div className="cart-header">
          <h3>Your Cart</h3>
          <button onClick={onClose}>✕</button>
        </div>

        {cartItems.length === 0 ? (
          <p style={{ textAlign: "center" }}>Cart is empty</p>
        ) : (
          <>
            {/* Cart Items */}
            {cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <span>{item.name}</span>
                <div className="cart-actions">
                  <button onClick={() => removeFromCart(item.id)}>-</button>
                  <span>{item.qty}</span>
                  <button onClick={() => addToCart(item)}>+</button>
                </div>
              </div>
            ))}

            <hr />

            {/* Billing */}
            <div className="bill">
              <p>Subtotal <span>₹{subtotal}</span></p>
              <p>Tax (5%) <span>₹{tax}</span></p>
              <p>Delivery <span>₹{delivery}</span></p>
              <h4>Total <span>₹{total}</span></h4>
            </div>

            {/* Pay Now Button */}
            {!showPayment && !paymentComplete && (
              <button className="pay-btn" onClick={() => setShowPayment(true)}>
                Pay Now
              </button>
            )}

            {/* Payment Options */}
            {showPayment && !paymentComplete && (
              <div className="payment-options">
                <h4>Select Payment Method</h4>

                <button className="payment-btn" onClick={() => setPaymentMethod("UPI")}>
                  UPI
                </button>
                <button className="payment-btn" onClick={() => setPaymentMethod("Card")}>
                  Credit/Debit Card
                </button>
                <button className="payment-btn" onClick={() => setPaymentMethod("NetBanking")}>
                  Net Banking
                </button>
                <button className="payment-btn" onClick={() => setPaymentMethod("Wallet")}>
                  Wallet
                </button>
                <button className="cancel-payment" onClick={resetPayment}>
                  Cancel
                </button>

                {/* UPI Form */}
                {paymentMethod === "UPI" && (
                  <div className="payment-form">
                    <input
                      type="text"
                      placeholder="Enter UPI ID"
                      value={upiId}
                      onChange={(e) => setUpiId(e.target.value)}
                    />
                    <button onClick={handlePayment}>Pay ₹{total}</button>
                  </div>
                )}

                {/* Card Form */}
                {paymentMethod === "Card" && (
                  <div className="payment-form">
                    <input
                      type="text"
                      placeholder="Card Number"
                      value={cardDetails.number}
                      onChange={(e) => setCardDetails({ ...cardDetails, number: e.target.value })}
                    />
                    <input
                      type="text"
                      placeholder="Name on Card"
                      value={cardDetails.name}
                      onChange={(e) => setCardDetails({ ...cardDetails, name: e.target.value })}
                    />
                    <input
                      type="text"
                      placeholder="Expiry MM/YY"
                      value={cardDetails.expiry}
                      onChange={(e) => setCardDetails({ ...cardDetails, expiry: e.target.value })}
                    />
                    <input
                      type="text"
                      placeholder="CVV"
                      value={cardDetails.cvv}
                      onChange={(e) => setCardDetails({ ...cardDetails, cvv: e.target.value })}
                    />
                    <button onClick={handlePayment}>Pay ₹{total}</button>
                  </div>
                )}

                {/* Net Banking / Wallet */}
                {(paymentMethod === "NetBanking" || paymentMethod === "Wallet") && (
                  <div className="payment-form">
                    <p>Processing {paymentMethod} Payment...</p>
                    <button onClick={handlePayment}>Pay ₹{total}</button>
                  </div>
                )}
              </div>
            )}

            {/* Payment Success */}
            {paymentComplete && (
              <div className="payment-success">
                <h4>Payment Successful! ✅</h4>
                <p>Thank you for your order.</p>
                <button onClick={resetPayment}>Close</button>
              </div>
            )}
          </>
        )}
      </div>
    </>
  );
}
