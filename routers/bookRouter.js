const express = require('express')
const router = express.Router()
const Book = require('../controllers/book')

router
  .get('/books', Book.index)
  .post('/books', Book.create)
  .get('/books/:id', Book.show)
  .patch('/books/:id', Book.update)
  .delete('/books/:id', Book.delete)

module.exports = router
