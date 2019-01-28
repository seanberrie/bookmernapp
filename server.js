require('dotenv').config()
const express = require('express')
const app = express()
const logger = require('morgan')
const bookRouter = require('./routers/bookRouter')
const PORT = process.env.PORT || 3000

// Database
require('./db')

// Middleware
app.use(logger('dev'))
app.use(express.json())
app.use('/api/', bookRouter)

app.get('/api', (req, res) => {
  res.json({ success: true })
})
app.listen(PORT, err => {
  console.log(`Server listening on port ${PORT}`)
})