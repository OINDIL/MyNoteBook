const connnectToMongo = require('./db')
const express = require('express')
connnectToMongo();

const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello TheOG!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})