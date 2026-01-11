export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* LOGO + ABOUT */}
        <div className="footer-section">
          <div className="footer-logo">
            <i className="bi bi-bootstrap-fill"></i>
            <span>BiteBox</span>
          </div>
          <p>
            Delicious food delivered to your doorstep.
            Fresh, fast and hygienic food experience.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li>Home</li>
            <li>Menu</li>
            <li>Offers</li>
            <li>Cart</li>
          </ul>
        </div>

        {/* CATEGORIES */}
        <div className="footer-section">
          <h4>Food Categories</h4>
          <ul>
            <li>Indian Food</li>
            <li>Non-Veg</li>
            <li>Healthy</li>
            <li>Fast Food</li>
          </ul>
        </div>

        {/* CONTACT */}
        <div className="footer-section">
          <h4>Contact Us</h4>
          <p>📍 Greater Noida, India</p>
          <p>📞 +91 84348 87881</p>
          <p>✉ support@bitebox.com</p>
        </div>

      </div>

      {/* BOTTOM BAR */}
      <div className="footer-bottom">
        © 2026 BiteBox | Made with ❤️ using React & Bootstrap
      </div>
    </footer>
  );
}
