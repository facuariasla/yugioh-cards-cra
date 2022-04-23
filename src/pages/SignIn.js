import React, { useState } from "react";
import { Header } from "../components/Header";
import "./SignIn.css";
import "./Login.css";
import { Link } from "react-router-dom";

const initialForm = {
  user: "",
  pass: "",
  pass2: "",
};

export const SignIn = () => {
  const [form, setForm] = useState(initialForm);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (form.pass === form.pass2) {
      alert("passwords do not match");
      return;
    }
    setForm(initialForm);
  };

  return (
    <div>
      <Header />
      <div className="login-container">
        <h1>Sign in</h1>
        <form className="sign-in-form" onSubmit={handleSubmit}>
          <input
            required
            type="text"
            placeholder="Username"
            autoFocus
            name="user"
            onChange={handleChange}
            value={form.user}
          />
          <input
            required
            type="password"
            placeholder="Password"
            name="pass"
            onChange={handleChange}
            value={form.pass}
          />
          <input
            required
            type="password"
            placeholder="Confirm Password"
            name="pass2"
            onChange={handleChange}
            value={form.pass2}
          />
          <button type="submit" value='signin'>Sign in</button>
        </form>
        <Link to="/login" className="login-link">
          i've an account - Login
        </Link>
      </div>
    </div>
  );
};
