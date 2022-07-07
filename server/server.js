const express = require("express");
const app = express();
const mysql = require("mysql");
// const cors = require('cors') uncomment this if you dont have CORS in your browser

// app.use(cors()) uncomment this if you dont have CORS in your browser

app.use(express.json())

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "",
  database: "db_for_crud_app",
});

app.post("/create", (req, res) => {
  const name = req.body.name;
  const surname = req.body.surname;
  const date_of_birth = req.body.date_of_birth;
  const coolness = req.body.coolness;
  const phone = req.body.phone;
  const email = req.body.email;

  db.query(
    "INSERT INTO crud_app_test (name, surname, date_of_birth, coolness, phone, email) VALUES (?,?,?,?,?,?)",
    [name, surname, date_of_birth, coolness, phone, email],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Values have been written.");
      }
    }
  );
});

app.get("/users", (req, res) => {

  db.query(
    "SELECT * from crud_app_test",
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

app.put('/update', (req, res) => {
    const id = req.body.id
    const name = req.body.name
    db.query("UPDATE crud_app_test SET name = ? WHERE id = ?", [name, id], (err, res) => {
        if (err) {
            console.log(err)
        } else {
            res.send(res)
        }
    })
})

// app.delete('/delete')

app.listen(3001, () => {
  console.log("server running on 3001");
});
