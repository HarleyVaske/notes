const express = require('express')
const app = express()
const port = 3000
app.set("view engine", "pug");
app.set("views", "./views");
app.get('/notes', require('./controllers/NoteController').get)
app.post('/notes', require('./controllers/NoteController').post)

app.listen(3000)

