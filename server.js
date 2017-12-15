const express = require('express')
const mongoClient = require('mongodb').MongoClient
const bodyParser = require('body-parser')

// app is an instnace of express.. can i run many?? (go routines)
const app = express()

const port = '9999'

require('./app/routes')(app, {});
app.listen(port, () => {
  console.log('Its litty on port:', port)
})
