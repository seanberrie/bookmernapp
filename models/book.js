const mongoose = require('mongoose')

const bookSchema = new mongoose.Schema({
  author: String,
  title: String,
  description: String
}, { timestamps: true })

module.exports = mongoose.model('book', bookSchema)
