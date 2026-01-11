import { useState, useEffect } from "react";

export default function SignIn({ isOpen, onClose }) {
  const [step, setStep] = useState("initial"); // initial | login | create

  // Reset step whenever panel opens
  useEffect(() => {
    if (isOpen) setStep("initial");
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <>
      <div className="overlay" onClick={onClose}></div>

      <div className={`signin-panel open`}>
        <div className="signin-header">
          <h2>
            {step === "login" ? "Login" : step === "create" ? "Create Account" : "Sign In"}
          </h2>
          <button className="close-btn" onClick={onClose}>✕</button>
        </div>

        <div className="signin-content">
          {step === "initial" && (
            <>
              <button className="signin-option" onClick={() => setStep("login")}>
                Login
              </button>
              <button className="signin-option" onClick={() => setStep("create")}>
                Create Account
              </button>
            </>
          )}

          {step === "login" && (
            <form onSubmit={(e) => e.preventDefault()}>
              <input type="tel" placeholder="Enter Mobile Number" required className="input-field"/>
              <button
                type="submit"
                className="signin-option"
                onClick={() => alert("OTP/Login logic here")}
              >
                Login
              </button>
            </form>
          )}

          {step === "create" && (
            <form onSubmit={(e) => e.preventDefault()}>
              <input type="text" placeholder="Full Name" required className="input-field"/>
              <input type="tel" placeholder="Mobile Number" required className="input-field"/>
              <input type="email" placeholder="Email" required className="input-field"/>
              <button
                type="submit"
                className="signin-option"
                onClick={() => alert("Create Account logic here")}
              >
                Create Account
              </button>
            </form>
          )}
        </div>
      </div>
    </>
  );
}
