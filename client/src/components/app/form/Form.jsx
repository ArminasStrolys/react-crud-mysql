import React from "react";

const Form = () => {
  return (
    <div className="form-class">
      <form className="form-input-class">
        <label>Name:</label>
        <input type="text" placeholder="Enter your name" />
        <label>Surname:</label>
        <input type="text" placeholder="Enter your surname" />
        <label>Date of birth:</label>
        <input type="date" defaultValue="2000-01-01" />
        <label>Coolness level:</label>
        <input type="number" min="1" max="10" placeholder="From 1 to 10" />
        <label>Phone number:</label>
        <input type="phone" placeholder="Enter your phone" />
        <label>E-mail address:</label>
        <input type="email" placeholder="Enter your e-mail" />
        <button type="submit">Add to database</button>
      </form>
    </div>
  );
};

export default Form;
