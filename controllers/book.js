const Book = require('../models/book')

exports.index = (req, res) => {
  Book.find({}, (err, books) => {
    if (err) res.json({ success: false, err })
    res.json({ success: true, books })
  })
}

exports.show = (req, res) => {
  Book.findById(req.params.id, (err, book) => {
    if (err) res.json({ success: false, err })
    res.json({ success: true, book })
  })
}

exports.create = (req, res) => {
  Book.create(req.body, (err, newBook) => {
    if (err) res.json({ success: false, err })
    res.json({ success: true, newBook })
  })
}

exports.update = (req, res) => {
  Book.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedBooks) => {
    if (err) res.json({ success: false, err })
    res.json({ success: true, updatedBooks })
  })
}

exports.delete = (req, res) => {
  Book.findByIdAndDelete(req.params.id, (err, deletedBook) => {
    if (err) res.json({ success: false, err })
    res.json({ success: true, deletedBook })
  })
}
