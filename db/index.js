const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true })

mongoose.connection
  .on('open', () => console.log('Database connection established'))
  .on('error', err => console.log('Error connecting', err))

module.exports = mongoose
