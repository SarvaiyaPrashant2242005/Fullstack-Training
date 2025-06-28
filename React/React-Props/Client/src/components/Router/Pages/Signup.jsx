import React, { useState } from 'react';
import './Signup.css';

const Signup = () => {
  const [name, setName] = useState('');
  const [email , setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cpass, setCpass] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== cpass) {
      alert("Passwords do not match");
      return;
    }

    fetch("http://localhost:3001/api/users/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name, email, password })
    })
    .then(res => {
      if (res.ok) {
        alert("Account created successfully!");
        setName('');
        setEmail('');
        setPassword('');
        setCpass('');
      } else {
        alert("Failed to create account");
      }
    })
    .catch((err) => console.log("Error:", err));
  };

  return (
    <div className="signup-container">
      <form className="signup-form" onSubmit={handleSubmit}>
        <h2>Sign Up</h2>

        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={cpass}
          onChange={(e) => setCpass(e.target.value)}
          required
        />

        <button type="submit">Create Account</button>

        <p className="login-link">
          Already have an account? <a href="#">Login</a>
        </p>
      </form>
    </div>
  );
};

export default Signup;
