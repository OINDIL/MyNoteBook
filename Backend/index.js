const connectToMongo = require('./db')
const express = require('express')
connectToMongo();
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello TheOG!')
}),
app.use(express.json())
// Available routes
app.use('/api/auth',require('./routes/auth'))
app.use('/api/notes',require('./routes/notesRouter'))

app.listen(port, () => {
  console.log(`Example app running on port http://localhost:${port}`)
})