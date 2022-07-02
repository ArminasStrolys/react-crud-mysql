const express = require('express')
const app = express()
const mysql = require('mysql')

const database = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: '',
    database: 'crud_app_test'
})

app.post('/create', (req, res) => {
    const name = req.body.name
    const surname = req.body.surname
    const date_of_birth = req.body.date_of_birth
    const coolness = req.body.coolness
    const phone = req.body.phone
    const email = req.body.email
})


app.listen(3001, () => {
    console.log("server running on 3001")
})

