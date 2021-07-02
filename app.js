const express = require('express')
const cors = require('cors')

const app = express()
const port = 8081

const movieList = require('./movieLists')

app.use(cors())

app.get('/api/movie', (req, res) => {
  res.json({ movieList })
})

app.listen(port)
console.log(`The server is running on localhost:${port}`)
