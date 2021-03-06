import React, { useState, useEffect } from "react";
import Axios from "axios";
import Users from "../users/Users";

const Form = () => {
  const [minimize, setMinimize] = useState(false);

  useEffect(() => {
    Axios.get("http://localhost:3001/users").then((res) => {
      setAllUsers(res.data);
    });
  }, []);

  const [data, setData] = useState({
    id: "",
    name: "",
    surname: "",
    date_of_birth: "",
    coolness: "",
    phone: "",
    email: "",
  });

  const [allUsers, setAllUsers] = useState([]);

  const getId = (id) => {
    deleteUser(id);
  };

  const getName = (name, surname, id) => {
    updateUser(name, surname, id);
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
      setAllUsers([
        ...allUsers,
        {
          name: data.name,
          surname: data.surname,
          date_of_birth: data.date_of_birth,
          coolness: data.coolness,
          phone: data.phone,
          email: data.email,
        },
      ]);
    });
    setData({
      name: "",
      surname: "",
      date_of_birth: "",
      coolness: "",
      phone: "",
      email: "",
    });
    setMinimize(false);
  };

  const updateUser = (name, surname, id) => {
    Axios.put("http://localhost:3001/update", {
      name: name,
      surname: surname,
      id: id,
    }).then((respnse) => {
      setAllUsers(
        allUsers.map((usr) => {
          return usr.id === id
            ? {
                id: usr.id,
                name: name,
                surname: surname,
                date_of_birth: usr.date_of_birth,
                coolness: usr.coolness,
                phone: usr.phone,
                email: usr.email,
              }
            : usr;
        })
      );
      window.location.reload();
    });
  };

  const deleteUser = (id) => {
    Axios.delete(`http://localhost:3001/delete/${id}`);
    setTimeout(() => window.location.reload(), 100);
  };

  return (
    <>
      <form style={{ display: minimize === false ? "block" : "none" }}>
        <button onClick={(e) => e.preventDefault(setMinimize(true))}>
          Show form
        </button>
      </form>

      <div
        style={{ display: minimize === true ? "block" : "none" }}
        className="form-class"
      >
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
          <button onClick={(e) => e.preventDefault(setMinimize(false))}>
            Hide form
          </button>
        </form>
      </div>
      <h2>Users list</h2>
      {allUsers.map((user) => (
        <Users
          user_id={user.user_id}
          key={user.user_id}
          name={user.name}
          surname={user.surname}
          cool={user.coolness}
          dob={user.date_of_birth}
          phone={user.phone}
          email={user.email}
          getName={getName}
          getId={getId}
        />
      ))}
    </>
  );
};

export default Form;
