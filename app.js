const express = require("express"),
    app = express()

const index = require("./routes/index")

app.use(express.static('public'))

app.set('view engine', 'pug')

app.get('/', index)

module.exports = app