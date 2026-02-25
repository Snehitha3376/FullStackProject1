import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function handleSignup() {
    const users = JSON.parse(localStorage.getItem("users")) || [];

    const newUser = { name, email, password };
    users.push(newUser);

    localStorage.setItem("users", JSON.stringify(users));
    localStorage.setItem("loggedInUser", JSON.stringify(newUser));

    alert("Signup successful!");
    navigate("/", { replace: true });
  }

  return (
    <div className="auth-wrapper">
      <div className="auth-card">

        <h2>Create Account</h2>
        <p className="auth-subtext">Join our virtual gallery</p>

        <input
          type="text"
          className="auth-input"
          placeholder="Full Name"
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="email"
          className="auth-input"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          className="auth-input"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="auth-btn" onClick={handleSignup}>
          Signup
        </button>

        <div className="auth-footer">
          Already have an account? <a href="/login">Login</a>
        </div>

      </div>
    </div>
  );
}