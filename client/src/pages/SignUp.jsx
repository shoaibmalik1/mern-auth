// import React from 'react'
import { useState } from "react";
import { Link } from "react-router-dom";

export default function SignUp() {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(false);
  const [loading, setLoding] = useState(false);
  
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.PreventDefault();
    try {
      setLoding(true);
      setError(true);
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();

      console.log(data)
      setLoding(false)
      if (data.success === false) {
        return;
      }
    } catch (error) {
      setLoding(false);
      setError(true);
    }
  };

  
  return (
    <div className="p-3 max-w-xl mx-auto">
    <h1 className="text-3xl text-center fontsimibold p-6 ">Sign Up </h1>
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <input
        placeholder="Username"
        className="bg-slate-100 rounded-lg p-3 relative mt-2 rounded-md shadow-sm"
        onChange={handleChange}
        id="username"
        type="text"
      />
      <input
        placeholder="Email"
        className="bg-slate-100 rounded-lg p-3"
        onChange={handleChange}
        id="email"
        type=""
      />

      <input
        placeholder="Password"
        className="bg-slate-100 rounded-lg p-3"
        onChange={handleChange}
        id="password"
        type="password"
      />
      <button
        disabled={loading}
        className="bg-slate-700 text-white p-3 rounded-lg
     uppercase hover:opacity-95 disabled:opacity-80"
      >
        { loading ? 'loading...' : 'Sign Up'}
      </button>
    </form>
    <div className="flex gap-3 mt-5">
      <p>Have an account?</p>
      <span className="text-blue-700 ">
        {" "}
        <Link to="sign-in">Sign in</Link>
      </span>
    </div>
    <p className="text-red-700 mt-5">{error && 'some thing went wrong '}</p>
  </div>
  );
}
