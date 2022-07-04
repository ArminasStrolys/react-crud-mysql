import React, { useState } from "react";
import Axios from "axios";

const Form = () => {
  const [data, setData] = useState({
    name: "",
    surname: "",
    date_of_birth: "",
    coolness: "",
    phone: "",
    email: "",
  });
  const [allUsers, setAllUsers] = useState([]);
  const getUsers = () => {
    Axios.get("http://localhost:3001/users").then((res) => {
      setAllUsers(res.data);
    });
  };
  console.log(allUsers);
  const handleSubmit = (e) => {
    e.preventDefault();
    Axios.post("http://localhost:3001/create", {
      name: data.name,
      surname: data.surname,
      date_of_birth: data.date_of_birth,
      coolness: data.coolness,
      phone: data.phone,
      email: data.email,
    }).then(() => {
      console.log("data sent");
    });
    setData({
      name: "",
      surname: "",
      date_of_birth: "",
      coolness: "",
      phone: "",
      email: "",
    });
    getUsers();
  };

  return (
    <>
      <div className="form-class">
        <form onSubmit={handleSubmit} className="form-input-class">
          <label>Name:</label>
          <input
            type="text"
            placeholder="Enter your name"
            value={data.name}
            onChange={(e) => setData({ ...data, name: e.target.value })}
            required
          />
          <label>Surname:</label>
          <input
            type="text"
            placeholder="Enter your surname"
            value={data.surname}
            onChange={(e) => setData({ ...data, surname: e.target.value })}
            required
          />
          <label>Date of birth:</label>
          <input
            type="date"
            value={data.date_of_birth}
            onChange={(e) =>
              setData({ ...data, date_of_birth: e.target.value })
            }
            required
          />
          <label>Coolness level:</label>
          <input
            type="number"
            min="1"
            max="10"
            placeholder="From 1 to 10"
            value={data.coolness}
            onChange={(e) => setData({ ...data, coolness: e.target.value })}
            required
          />
          <label>Phone number:</label>
          <input
            type="phone"
            placeholder="Enter your phone"
            value={data.phone}
            onChange={(e) => setData({ ...data, phone: e.target.value })}
            required
          />
          <label>E-mail address:</label>
          <input
            type="email"
            placeholder="Enter your e-mail"
            value={data.email}
            onChange={(e) => setData({ ...data, email: e.target.value })}
            required
          />
          <button type="submit">Add to database</button>
        </form>

        {allUsers.map((e, key) => {
          return <div>{e.name}</div>;
        })}
      </div>
    </>
  );
};

export default Form;
