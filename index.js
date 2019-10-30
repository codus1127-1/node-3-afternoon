require('dotenv').config()
const express = require('express')
const massive = require('massive')
const {SERVER_PORT, CONNECTION_STRING} = process.env
const ctrl = require('./controller')

const app = express()

app.use(express.json())

app.get('/api/products', ctrl.getAll)
app.get('/api/products/:id', ctrl.getOne)
app.post('/api/products', ctrl.create)
app.put('/api/products/:id', ctrl.update)
app.delete('/api/products/:id', ctrl.delete)

massive(CONNECTION_STRING).then(databaseConnection => {
    app.set('db', databaseConnection)  
    app.listen(SERVER_PORT, () => console.log(`Listening on port ${SERVER_PORT} `))
})
