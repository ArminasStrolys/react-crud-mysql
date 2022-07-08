import React, { useState } from "react";

const Users = (props) => {
  const [visible, setVisible] = useState(false);
  const [data, setData] = useState({
    name: "",
    surname: "",
  });

  const handleEdit = (e) => {
    e.preventDefault();
    visible === true ? setVisible(false) : setVisible(true);
  };
  const handleDelete = (e) => {
    e.preventDefault();
    props.getId(props.user_id);
  };
  const handleChange = (e) => {
    e.preventDefault();
    props.getName(data.name, data.surname, props.user_id);
    console.log(props.user_id);
  };

  return (
    <div className="user_bar">
      <p>
        <b>
          {props.name} {props.surname}
        </b>
      </p>
      <p>
        DOB: {props.dob.slice(0, 10)}. Coolness lvl: {props.cool}
      </p>
      <p>
        Phone: +37{props.phone}. E-mail: {props.email}
      </p>
      <div>
        <form>
          <button onClick={handleEdit} className="edit_btn">
            {visible === true ? "Hide" : "Edit"}
          </button>
          <input
            style={{ display: visible === true ? "block" : "none" }}
            className="name_change"
            type="text"
            placeholder="Change name"
            onChange={(e) => setData({ ...data, name: e.target.value })}
          />
          <input
            style={{ display: visible === true ? "block" : "none" }}
            className="surName_change"
            type="text"
            placeholder="Change surname"
            onChange={(e) => setData({ ...data, surname: e.target.value })}
          />
          <button
            onClick={handleChange}
            style={{ display: visible === true ? "block" : "none" }}
            className="change_btn"
          >
            Change
          </button>
          <button onClick={handleDelete} className="delete_btn">
            Delete
          </button>
        </form>
      </div>
    </div>
  );
};

export default Users;
