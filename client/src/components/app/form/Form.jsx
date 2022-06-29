import React, { useState } from "react";

const Form = () => {
  const [data, setData] = useState({
    name: "",
    surname: "",
    dob: "",
    coolness: 1,
    phone: 0,
    email: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
  };

  return (
    <div className="form-class">
      <form onSubmit={handleSubmit} className="form-input-class">
        <label>Name:</label>
        <input
          type="text"
          placeholder="Enter your name"
          onChange={(e) => setData({ ...data, name: e.target.value })}
          required
        />
        <label>Surname:</label>
        <input
          type="text"
          placeholder="Enter your surname"
          onChange={(e) => setData({ ...data, surname: e.target.value })}
          required
        />
        <label>Date of birth:</label>
        <input
          type="date"
          defaultValue="2000-01-01"
          onChange={(e) => setData({ ...data, dob: e.target.value })}
          required
        />
        <label>Coolness level:</label>
        <input
          type="number"
          min="1"
          max="10"
          placeholder="From 1 to 10"
          onChange={(e) => setData({ ...data, coolness: e.target.value })}
          required
        />
        <label>Phone number:</label>
        <input
          type="phone"
          placeholder="Enter your phone"
          onChange={(e) => setData({ ...data, phone: e.target.value })}
          required
        />
        <label>E-mail address:</label>
        <input
          type="email"
          placeholder="Enter your e-mail"
          onChange={(e) => setData({ ...data, email: e.target.value })}
          required
        />
        <button type="submit">Add to database</button>
      </form>
    </div>
  );
};

export default Form;
