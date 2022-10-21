const mongoose = require('mongoose')
mongoose.connect(process.env.MongoDB_URI_REURL)
const db = mongoose.connection

db.on('error', () => {
  console.log('error:', 'error')
})

db.on('open', () => {
  console.log('MongoDB is connecting')
})

module.exports = db
